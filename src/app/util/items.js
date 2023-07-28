// shirts
import shirt1 from '../images/products/shirt1.png'
import shirt2 from '../images/products/shirt2.png'
import shirt3 from '../images/products/shirt3.png'
import shirt4 from '../images/products/shirt4.png'
// pants
import pants1 from '../images/products/pants1.png'
import pants2 from '../images/products/pants2.png'
import pants3 from '../images/products/pants3.png'
// sweaters
import sweater1 from '../images/products/sweater1.png'
import sweater2 from '../images/products/sweater2.png'


class Producto {
  constructor(nombre, precio, imagen, categoria) {
    this.nombre = nombre
    this.precio = precio
    this.imagen = imagen
    this.categoria = categoria
  }
}

const products = {}

products["j_pants_n"] = new Producto(
  "Jogger Pants Quality",
  150.0,
  pants1,
  "pantalones"
)

products['j_pants_s'] = new Producto(
  "Jogger Pants Soft",
  178.0,
  pants2,
  "pantalones"
)

products['j_pants_s'] = new Producto(
  "Jogger Pants Expand",
  178.0,
  pants3,
  "pantalones"
)

products['s_shirt_cat'] = new Producto(
  "Chinese Cat Shirt",
  250.0,
  shirt1,
  "playeras"
)

products['s_shirt_mock'] = new Producto(
  "Mockup ™️ Shirt",
  125.0,
  shirt2,
  "playeras"
)

products['s_shirt_statue'] = new Producto(
  "Statue Shirt",
  75.0,
  shirt3,
  "playeras"
)

products['s_shirt_lucky_cat'] = new Producto(
  "Lucky Cat Shirt",
  450.0,
  shirt4,
  "playeras"
)

products['sweater_soft'] = new Producto(
  "Soft Sweater",
  125.0,
  sweater1,
  "sueteres"
)

products['sweater_stripes'] = new Producto(
  "Stripes Sweater",
  500.0,
  sweater2,
  "sueteres"
)

export default products
