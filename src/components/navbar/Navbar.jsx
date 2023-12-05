"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DarkModeToggle from "../darkmodeToggle/DarkModeToggle"
import Authlinks from '../AuthLinks/Authlinks'

const Navbar = () => {
  return (
    <div className='flex items-center h-[100px] justify-between w-[100%]'>
      <div className='flex-1 flex gap-[10px] max-md:hidden'>
        {[
          ["facebook", "/facebook.png"],
          ["instagram,", "/instagram.png"],
          ["tiktok", "/tiktok.png"],
          ["youtube", "/youtube.png"],
        ].map(([name, route], index) => (
          <Image key={index} src={route} alt={name} width={24} height={24} />
        ))}
      </div>
      <div className='flex-1 text-center text-[36px] font-bold max-md:text-left'>B-Blogs</div>
      <div className='flex-1 flex gap-[10px] items-center justify-end z-auto'>
        <DarkModeToggle/>
        {[
          ["homepage", "/homepage"],
          ["Contacts,", "/Contacts"],
          ["About", "/About"],
          ["Login", "/Login"],
        ].map(([name, route], index) => (
          <Link className='max-sm:hidden' key={index} href={route}>{name}</Link>
        )
        )}
        <Authlinks/>
      </div>
    </div>
  )
}

export default Navbar