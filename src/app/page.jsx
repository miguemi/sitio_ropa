import CustomNavbar from "./components/header"
import CustomFooter from "./components/footer"
import Image from 'next/image'
import tech1 from './images/tech1.png'
import tech2 from './images/tech2.png'
import tech3 from './images/tech3.png'

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

        {/* carrousel */}
        <div className="container mt-3">
          <div id="carouselExampleIndicators" className="carousel slide d-none d-sm-block">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src={tech1} 
                  className="d-block w-100"
                  width={1280}
                  height={854}
                />
              </div>
              <div className="carousel-item">
                <Image src={tech2} 
                  className="d-block w-100"
                  width={1280}
                  height={854}
                />
              </div>
              <div className="carousel-item">
                <Image src={tech3} className="d-block w-100"
                  width={1280}
                  height={854}
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
        </div>

      </main>
      <CustomFooter/>
    </div>
  )
}
