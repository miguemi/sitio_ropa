import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sitio de ropa',
  description: 'QA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
