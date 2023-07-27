import CustomFooter from "../components/footer";
import CustomNavbar from "../components/header";

export default function Carrito() {
  return (
    <>
      <div className="layout">
        <CustomNavbar />
        <main>
          {/* aqui empezas a trabajar */}

          <div className="container my-4">

            <h2 className="mb-3">Cesta de la compra</h2>

            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
              <p>
                ¡Bienvenido a nuestra tienda de ropa en línea! Entregamos en
                toda la República en 24-48 horas hábiles, después de validar el
                pago con el banco emisor. Puede haber demoras en caso de
                confirmación tardía o días festivos. ¡Compra con nosotros y luce
                a la moda en poco tiempo!
              </p>
              {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>


          {/* no hay necesidad de agregar tantas clases, con un text-center lo podemos hacer. */}
          <section>
            <h3 className="text-center">
              No hay articulos en tu carrito de compra.
            </h3>
          </section>

          <a href="/catalogo/">
            <h4 className="text-center">Seguir comprando</h4>
          </a>
        </main>
        <CustomFooter />
      </div>
    </>
  );
}
