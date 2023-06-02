'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const path = usePathname();
  return (
      <nav className='w-full pb-4 pt-4 mb-4'>
          <ul className='flex flex-row justify-start'>
              <li className={`pl-4 pr-10 hover:text-blue-400  border-r-2 border-black ${path === '/' ? 'text-blue-700 font-bold' : 'text-blue-600'}`}>
                  <Link href='/' >Shop</Link>
              </li>
              <li className={`pr-4 pl-10 hover:text-blue-400 ${path === '/' ? 'text-blue-600' : 'text-blue-700 font-bold'}`}>
                  <Link href='/cart' >Shopping cart</Link>
              </li>
          </ul>
    </nav>
  )
}

export default Nav
