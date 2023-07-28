import Image from 'next/image'
import CustomFooter from "../../components/footer";
import CustomNavbar from "../../components/header";
import { notFound } from 'next/navigation';
import products from "../../util/items.js";


export default function Detalle({params}) {
  const {producto} = params

  if(!(producto in products)){
    notFound()
  }

  const prod = products[producto]

  return (
    <div className="layout">
      <CustomNavbar />
      <main>
        {/* aqui empezas a trabajar */}
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <Image 
                src={prod.imagen} 
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col">
              <p className='h2'>{prod.nombre}</p>
              {/* <p><small>{producto.toUpperCase()}</small> </p> */}
              <p className='h4 text-secondary'>{prod.precio.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} <span>GTQ</span></p>
              <hr />
              <div>
                <p><u>Detalles del producto</u></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque cumque obcaecati similique necessitatibus, consequatur mollitia sit quam consectetur eaque inventore saepe, maiores tempore voluptates dicta ut iste, cum possimus.</p>
              </div>
              <form className='my-3'>
                <div className="mb-3">
                  <label className="form-label">Selecciona tu talla</label>
                  <select className="form-select">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m" selected>M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Selecciona el color</label>
                  <select className="form-select">
                    <option>Negro</option>
                    <option>Blanco</option>
                    <option>Verde</option>
                    <option>Azul</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Cantidad</label>
                  <input type="number" class="form-control" required min={1} defaultValue={1}/>
                </div>
                <button type="submit" class="btn btn-primary mt-3">
                  <i class="bi bi-cart-plus-fill"/> Añadir al carrito
                </button>
              </form>
            </div>
          </div>
        </div>

      </main>
      <CustomFooter />
    </div>
  );
}
