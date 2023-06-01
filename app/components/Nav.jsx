'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const path = usePathname();
  return (
      <Nav className='w-full pb-4 pt-4 border-b-1 border-black'>
          <ul className='flex flex-row justify-start'>
              <li className={`pr-2 hover:text-blue-400  border-r-2 border-black ${path === '/' ? 'text-blue-700 font-bold' : 'text-blue-600'}`}>
                  <Link href='/' >Shop</Link>
              </li>
              <li className={`pl-2 hover:text-blue-400 ${path === '/' ? 'text-blue-600' : 'text-blue-700 font-bold'}`}>
                  <Link href='/cart' >Shopping cart</Link>
              </li>
          </ul>
    </Nav>
  )
}

export default Nav