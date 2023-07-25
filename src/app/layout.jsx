import Script from 'next/script';
import { Inter } from 'next/font/google'
import './styles.css'
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sitio de ropa',
  description: 'QA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin='anonymous'
      />
    </html>
  )
}
