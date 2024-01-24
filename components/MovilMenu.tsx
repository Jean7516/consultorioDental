"use client"
import { navLinks, socialLinks } from '@/constans';
import { Menu, Phone, X } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'
import NavLink from './NavLinks';

const MovilMenu = () => {
    const[isOpen, setIsOpen]=useState(false);
    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }

  return (
    <div className='tablet:hidden p-8'>
        {/* toggle button*/}
        <button className='text-grey-100 hover:text-purple transition-colors' onClick={toggleMenu}>
            <Menu/>
        </button>
        <div className={`w-full h-screen flex flex-col bg-slate-950/80 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className='flex w-full items-center justify-between h-20 max-width border-b border-peach'>
                <Link href={"/"}>
                    <h5 className='text-purple-50 text-xl font-semibold'>Jean</h5>
                </Link>
                <button className='text-grey-100 hover:text-purple-700 transition-colors' onClick={toggleMenu}>
                    <X/>
                </button>
            </div>
            <nav className='flex flex-col items-center justify-center flex-1 gap-10'>
                <ul className='flex items-center flex-col gap-5'>{navLinks.map((link,index)=>(
                    <li key={index}>
                        <NavLink href={link.url}label={link.label} />
                    </li> 
                ))}</ul>
                <Link href={"/contact"} className='btn btn-primary'>
                    <Phone size={24}>Contacto</Phone>
                </Link>
            </nav>
            <div className='w-full h-20 flex items-center justify-between max-width border-t border-peach'>
                {socialLinks.map((link,index)=>(
                    <a key={index} href={link.url} className='text-gray-100 hover:text-purple-700 transition-colors'>{link.label}</a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovilMenu