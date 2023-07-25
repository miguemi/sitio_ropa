import CustomNavbar from "./components/header"
import CustomFooter from "./components/footer"
import Image from 'next/image'
// imagenes
import tech1 from './images/tech1.png'
import tech2 from './images/tech2.png'
import tech3 from './images/tech3.png'
// ropa
import camisa1 from './images/camisa1.png'

export default function Home() {
  return (
    <div className="layout">
      <CustomNavbar/>
      <main className="">
        {/* banner  */}
        <div className="position-relative overflow-hidden text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Lorem ipsum dolor</h1>
            <p className="lead fw-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam odio fuga cupiditate ab voluptatem? Accusantium aspernatur saepe corrupti alias laudantium illo, delectus error in veniam dolorum culpa sequi dignissimos enim.</p>
            <a className="btn btn-outline-secondary" href="#">Proximamente!</a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="container mt-3">
          {/* carrousel */}
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src={tech1} 
                  className="img-fluid d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <Image src={tech2} 
                  className="img-fluid d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <Image 
                  src={tech3} 
                  className="img-fluid d-block w-100"
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* apartado de productos */}
          <div className="camisas my-3">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col mt-4">
                <Image src={camisa1} 
                  className="img-fluid mx-auto d-block"
                />
              </div>
              <div className="col mt-4">
                <Image src={camisa1} 
                  className="img-fluid mx-auto d-block"
                />
              </div>
              <div className="col mt-4">
                <Image src={camisa1} 
                  className="img-fluid mx-auto d-block"
                />
              </div>
              <div className="col mt-4">
                <Image src={camisa1} 
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <hr className='my-5'/>

          <form className="mb-5">
            <h2 id='boletin'>Suscríbete a nuestro boletín</h2>
            <div className="row row-cols-1 row-cols-md-2 mt-4 ">
              {/* nombres y apellidos */}
              <div className="col mb-3">
                <label class="form-label">Nombres</label>
                <input required class="form-control"/>
              </div>
              <div className="col mb-3">
                <label class="form-label">Apellidos</label>
                <input required class="form-control"/>
              </div>

              {/* telefono y correo */}
              <div className="col mb-3">
                <label class="form-label">Correo electronico</label>
                <input required type="email" class="form-control"/>
              </div>
              <div className="col mb-3">
                <label class="form-label">Número de telefono</label>
                <input type="tel" class="form-control"/>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <button type="submit" class="btn btn-primary w-25">Enviar</button>
              </div>
            </div>
          </form> 

          {/* fin del container */}
        </div>

      </main>
      <CustomFooter/>
    </div>
  )
}
