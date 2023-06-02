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
        <div className='main'></div>
        <main className='app'>
        <Nav/>
        {children}
        </main>
      </body>
    </html>
  )
}
