"use client"
import { navLinks } from '@/constans'
import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import MovilMenu from './MovilMenu'
import { useEffect,useState } from "react";



 const Header = () => {
    const[header,setHeader]=useState(false);
    const scrollHeader=()=>{
        if(window.scrollY>=20){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHeader)
        return()=>{
            window.addEventListener('scroll',scrollHeader)
        }
    },[])

  return (<>
    <header className={
        "w-full fixed z-10 bg-slate-400/40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "}>
            <div className={header ? " "
            :' w-full fixed top-5 left-3 right-0 z-10 '}>
                <div className='flex  items-center justify-between h-20 max-width font-primary'>
                    <Link href={'/'}>
                        <h1 className='text-white font-text'>Consultorio</h1>
                    </Link>
                    <nav className='flex gap-12 max-tablet:hidden'>
                        <ul className='flex items-center gap-8'>
                            {navLinks.map((limk,index)=>(
                            <li key={index}>
                                <NavLinks href={limk.url} label={limk.label}/>
                            </li>))}
                        </ul>
                        <Link href={"/"}></Link>
                    </nav>
                    <MovilMenu/>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header