export default function CustomNavbar(){
  return (
    <header className="sticky-top opacity-75">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="/">Sitio de ropa</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#boletin">
                  <i className="bi bi-envelope-paper-fill"/> Boletin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/catalogo/">
                  <i className="bi bi-box-fill"/> Catalogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacto/">
                  <i className="bi bi-telephone-fill"/> Contacto
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/carrito/">
                  <i className="bi bi-bag-fill"/> Carrito
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
