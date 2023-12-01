"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Authlinks = () => {
  const [open, setOpen] = useState(false);

  const status = "authenticated"
  return (
    <div className='flex gap-[10px] items-center'>
      <div className="flex gap-[10px] items-center max-sm:hidden">
        {
          status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) :
            <>
              <Link href="/write">Write</Link>
              <span className='cursor-pointer'>Logout</span>
            </>
        }
      </div>
      <div className="cursor-pointer text-[30px] hidden max-sm:flex">
        {open ? <GrClose   onClick={() => setOpen(false)} /> : <GiHamburgerMenu onClick={() => setOpen(true)} /> }
      </div>
      {
        open && (
            <div className='absolute top-[100px] left-0 right-0 bottom-0 h-[calc(100vh-100px)] bg-[#bbb] flex flex-col items-center justify-center gap-[20px] text-[white]'>
            {[
              ["homepage", "/homepage"],
              ["Contacts", "/Contacts"],
              ["About", "/About"],
            ].map(([name, route], index) => (
              <Link key={index} className='text-[36px]' href={route}>{name}</Link>
            )
            )}
            {
              status === "notauthenticated" ? (
                <Link className='text-[36px]' href="/login">Login</Link>
              ) :
                <>
                  <Link className='text-[36px]' href="/write">Write</Link>
                  <span className='cursor-pointer text-[36px]'>Logout</span>
                </>
            }
          </div>
        )
      }
    </div>
  )
}

export default Authlinks