export default function CustomFooter(){
  const date = new Date().toLocaleDateString()

  return (
    <footer class="py-2 bg-dark mt-4">
      <ul class="nav justify-content-center pb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Inicio</a></li>
        <li class="nav-item"><a href="https://github.com/alanfvn" target="_blank" class="nav-link px-2 text-white">Acerca de</a></li>
      </ul>
      <p class="text-center text-muted">© {`${date}`} Alan David González López</p>
    </footer>
  )
}
