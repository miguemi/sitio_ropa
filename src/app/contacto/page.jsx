import CustomNavbar from "../components/header";
import CustomFooter from "../components/footer";
export default function Catalogo() {
  return (
    <div className="layout">
      <CustomNavbar />
      <main>
        <div className="container my-5 ">


          <h1 className="text-center">Página de contacto MA-Store</h1>
          <h2 className="text-center">Compras y consultas sobre productos</h2>

          <div className="row row-cols-1 row-cols-md-2 mt-5">
            <div className="col mb-5">
              <p className="h5 text-center"> Cómo encontrar distribuidores autorizados </p>
              <p> Visita nuestro Localizador de Distribuidores para encontrar un distribuidor autorizado de Store M-A en Guatemala. </p>
            </div>
            <div className="col">
              <p className="h5 text-center"> Cómo encontrar proveedores de servicio autorizados </p>
              <p> Visita nuestro Localizador de Proveedores de Servicio para encontrar un proveedor de servicio autorizado de Store M-A en Guatemala.</p>
            </div>
          </div>
          <hr/>


          <div className="d-flex flex-column align-items-center">
            <div className="my-5 col-md-7">
              <p className="h1 text-center">Soporte a clientes</p>
              <p className="text-center">
                En Store M-A, nuestra principal misión es brindarte siempre el mejor apoyo y atención en cualquier situación o duda que puedas tener. Estamos aquí para asistirte con gusto a través de diversos medios de comunicación.
              </p>
              <div className="mt-4 col-md-6">
                <ul className="list-unstyled">
                  <li><i className="bi bi-telephone"/> <strong>+502 5020-3090</strong></li>
                  <li><i className="bi bi-whatsapp"/> <a href="wa.me/+50250203090" target="_blank" > WhatsApp </a></li>
                  <li>
                    <i className="bi bi-envelope"/> <a href="contacto@ma-store.com">contacto@ma-store.com</a>
                  </li>
                  <li><i className="bi bi-geo-alt"/> <strong>Centro Comercial Plaza Magdalena, Zona 5, Cobán, Guatemala Primer Nivel </strong></li>
                </ul>
                <p className="fst-italic">Nuestra misión es servirte</p>
              </div>
            </div>
          </div>
        </div>

      </main>
      <CustomFooter />
    </div>
  );
}
