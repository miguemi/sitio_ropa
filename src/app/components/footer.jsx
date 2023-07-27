export default function CustomFooter(){
  const date = new Date().toLocaleDateString()

  return (
    <footer className="py-2 bg-dark mt-4">
      <ul className="nav justify-content-center pb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Inicio</a></li>
        <li className="nav-item"><a href="https://github.com/alanfvn" target="_blank" className="nav-link px-2 text-white">Acerca de</a></li>
      </ul>
      <p className="text-center text-muted">© {`${date}`} Alan David González López</p>
    </footer>
  )
}
