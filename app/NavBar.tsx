'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Logo from './assets/logo-laptop.png'
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
   
    const links = [
        {label: 'Home', href: '/'},
        {label: 'Posts', href: '/posts'},
    ]

  return (
        <>
            <nav> 
                <ul className='flex space-x-6 border-b mb-5 mt-5 px-3 h-14'>
                    <Link href='/'><Image src={Logo} alt='logo'/></Link>
                    {links.map(link => 
                        <Link  
                            key={link.href}
                            className={classnames({
                                'text-zinc-900' : link.href === currentPath,
                                'text-zinc-500' : link.href !== currentPath,
                                'hover:text-zinc-800 transition-colors' : true
                            })}
                            href={link.href}
                            >
                                {link.label}
                        </Link> )}
                </ul>
            </nav>
        </>
        
     

  )
}

export default NavBar