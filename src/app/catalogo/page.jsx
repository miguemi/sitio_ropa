import CustomNavbar from "../components/header"
import CustomFooter from "../components/footer"
import Image from 'next/image'
import tech1 from '../images/camisa1.png'

export default function Catalogo(){

  const prods = [
    {
      name: "producto1",
      price: 90,
    },
    {
      name: "producto 2",
      price: 90
    },
    {
      name: "producto1",
      price: 90
    },
    {
      name: "producto1",
      price: 90
    },
    {
      name: "producto1",
      price: 90
    },
    {
      name: "producto1",
      price: 90
    },
    {
      name: "producto1",
      price: 90
    },
    {
      name: "producto1",
      price: 90
    },
    {
      name: "producto1",
      price: 90
    },
    {
      name: "producto1",
      price: 90
    }
  ]



  return (
    <div className="layout">
      <CustomNavbar/>
      <main>
        <div className="container">
          <h1 className="mt-4">Cátalogo</h1>
          <div className="row row-cols-2 row-cols-md-4">
            {
              prods.map(x => {
                return (
                  <div className="col my-4">
                    <a href="/carrito/" className="hover-effect" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar al carrito!">
                      <Image 
                        src={tech1} 
                        className="img-fluid mb-2"
                      />
                    </a>
                    <a href="#" className="link-primary link-underline-opacity-0 link-underline-opacity-100-hover">
                      <p className="text-center mb-0">
                        {x.name}
                      </p>
                    </a>
                    <p className="text-dark text-center mb-0">
                      <small className="fst-italic">desde</small> <strong>{x.price.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} </strong> GTQ
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
