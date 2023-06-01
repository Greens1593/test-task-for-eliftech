import Nav from './components/Nav'
import './globals.css'

export const metadata = {
  title: 'Food Delivery App',
  description: 'Test task given by Eliftech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='mx-auto'>
        <Nav/>
        {children}
        </main>
      </body>
    </html>
  )
}
