import CustomFooter from "../../components/footer";
import CustomNavbar from "../../components/header";

export default function Detalle({params}) {
  const {producto} = params

  return (
    <>
      <div className="layout">
        <CustomNavbar />
        <main>
          {/* aqui empezas a trabajar */}
          <div className="container my-4">
            <h1>{producto}</h1>

            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>

        </main>
        <CustomFooter />
      </div>
    </>
  );
}
