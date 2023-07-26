import CustomFooter from "../components/footer";
import CustomNavbar from "../components/header";

export default function Carrito() {
  return (
    <>
      <div className="layout">
        <CustomNavbar />
        <main>
          {/* aqui empezas a trabajar */}
          <section>
            <div class="h-100 d-flex align-items-center justify-content-center p-3 mb-2 bg-secondary text-white p-4 mb-2   ">
              <h6>
                ¡Bienvenido a nuestra tienda de ropa en línea! Entregamos en
                toda la República en 24-48 horas hábiles, después de validar el
                pago con el banco emisor. Puede haber demoras en caso de
                confirmación tardía o días festivos. ¡Compra con nosotros y luce
                a la moda en poco tiempo!
              </h6>
            </div>
          </section>

          <div class="container cart__empty-cart-message ">
              <h2>Cesta de la compra</h2>
          </div>
          <section>

            <div class="h-100 d-flex align-items-center justify-content-center  p-5 mb-2">
              <h3>No hay articulos en tu carta</h3>
            </div>
          </section>
          <section>
            <div class="h-100 d-flex align-items-center justify-content-center    ">
              <h3>Sobre nosotros</h3>
            </div>
          </section>
        </main>
        <CustomFooter />
      </div>
    </>
  );
}
