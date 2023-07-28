"use client"
import CustomNavbar from "../components/header"
import CustomFooter from "../components/footer"
import Image from 'next/image'
import products from "../util/items"
import { useState } from "react"

export default function Catalogo(){

  const [prods, setProds] = useState(Object.keys(products))
  // const [change, triggerChange] = useState(false)

  const filterByType = (e) => {
    const {value} = e.target
    if(value === 'all'){
      setProds(Object.keys(products))
    }else{
      setProds(Object.keys(products).filter(x => {
        const filt = products[x]
        if (filt.categoria === value){
          return filt
        }
      }))
    }
  }

  return (
    <div className="layout">
      <CustomNavbar/>
      <main>
        <div className="container">

          <div className="row mt-4 row-cols-1 row-cols-md-2">
            <div className="col">
              <h1 className="">Cátalogo</h1>
            </div>
            <div className="col">
              <select className='form-select w-50 ms-md-auto' onChange={filterByType} defaultValue={0}>
                <option value="all">Todo</option>
                <option value="playeras">Playeras</option>
                <option value="pantalones">Pantalones</option>
                <option value="sueteres">Sueteres</option>
              </select>
            </div>
          </div>

          <div className="row row-cols-2 row-cols-md-4">
            {
              prods.map(x => {
                const prod = products[x]

                return (
                  <div className="col my-4">
                    <a href="/carrito/" className="hover-effect" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar al carrito!">
                      <Image 
                        src={prod.imagen} 
                        className="img-fluid mb-2"
                      />
                    </a>
                    <a href={`/detalles/?producto=${x}`} className="link-primary link-underline-opacity-0 link-underline-opacity-100-hover">
                      <p className="text-center mb-0">
                        {prod.nombre}
                      </p>
                    </a>
                    <p className="text-dark text-center mb-0">
                      <small>precio</small> <strong>{prod.precio.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} </strong> GTQ
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </main>
      <CustomFooter/>
    </div>
  )
}
