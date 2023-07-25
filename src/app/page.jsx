import CustomNavbar from "./components/header"
import CustomFooter from "./components/footer"
// import Image from 'next/image'

export default function Home() {

  return (
    <div className="layout">
      <CustomNavbar/>
      <main className="container mt-3">
        <h1>App de inicio</h1>
      </main>
      <CustomFooter/>
    </div>
  )
}
