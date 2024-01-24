"use client"
import React from 'react'
import Link from 'next/link';
const NavLinks = ({href,label}:{href:string;label:string}) => {
  return (
    <Link href={href} className={`py-3 text-gray-200 text-lg   stroke-black  hover:text-gray-900 transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left}
    `}>{label}</Link>
  )
}

export default NavLinks