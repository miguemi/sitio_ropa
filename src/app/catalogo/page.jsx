import CustomNavbar from "../components/header";
import CustomFooter from "../components/footer";

export default function Catalogo(){
  return (
    <div className="layout">
      <CustomNavbar/>
      <main>
        <div className="container">
          <h1>Cátalogo</h1>
        </div>
      </main>
      <CustomFooter/>
    </div>
  )
}
