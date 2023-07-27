import CustomNavbar from "../components/header";
import CustomFooter from "../components/footer";
export default function Catalogo() {
  return (
    <div className="layout">
      <CustomNavbar />
      <main>
        <section>
          <div class="h-100 d-flex align-items-center justify-content-center  p-4 mb-1 ">
            <h1>Contacta a Store M-A</h1>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row h-100 d-flex align-items-center justify-content-center p-2 mb-2">
              <h3 class="text-center">Compras y consultas sobre productos</h3>
            </div>
            <div class="row">
              <div class="col-md-5">
                <h5 class="text-center">
                  Cómo encontrar distribuidores autorizados
                </h5>
                <div class="col-md-11 mx-auto">
                  <h7 class="text-center">
                    Visita nuestro Localizador de Distribuidores para encontrar
                    un distribuidor autorizado de Store M-A en Guatemala.
                  </h7>
                </div>
              </div>
              <div class="col-md-6">
                <h5 class="text-center">
                  Cómo encontrar proveedores de servicio autorizados
                </h5>
                <div class="col-md-11 mx-auto">
                  <h7 class="text-center">
                    Visita nuestro Localizador de Proveedores de Servicio para
                    encontrar un proveedor de servicio autorizado de Store M-A
                    en Guatemala.
                  </h7>
                </div>
                <br />
              </div>
              <hr />
            </div>
          </div>
      </section>

      <section class="container">
  <div class="row justify-content-center">
    <div class="col-md-7">
      <h1 class="text-center">Asistencia para clientes</h1>
      <div class="col-md-7">
        <div>
          <p>
            En Store M-A, nuestra principal misión es brindarte siempre el mejor apoyo y atención en cualquier situación o duda que puedas tener. Estamos aquí para asistirte con gusto a través de diversos medios de comunicación.
          </p>
          <p>
            <strong>📲 Telefono: 32232322</strong>
          </p>
          <p>
            <strong>
              🟢 Whatsapp:
              <a
                href="wa.me/50245000720"
                target="_blank"
                title="Link de Whatsapp"
                rel="noopener noreferrer"
              >
                wa.me/50245000720
              </a>
            </strong>
          </p>
          <p>
            <strong>📧 Correo Electronico: storem-a@hotmail.com</strong>
          </p>
          <p>
            <strong>
              🏘️&nbsp; Dirección:  Centro Comercial Plaza Magdalena, Zona 5, Cobán, Guatemala Primer Nivel
            </strong>
          </p>
          <p>
            <span>Nuestra mision es servirte.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>
      <CustomFooter />
    </div>
  );
}
