import Link from 'next/link'
import React from 'react'

import { Navbar as Nb } from './types/Navbar'

const Navbar = ({title,menus}:Nb) => {
    return (
        <div className='fixed p-4 z-[3] w-full bg-orange-500/50'>
            <div className='flex py-2 justify-between'>
                <h2 className='flex text-3xl text-white'>
                    {title}
                </h2>
                <ul className='flex items-center'>
                    {menus?.map((m)=> {
                        return (<li className='px-4 font-bold text-white hover:text-gray-200'>
                            <Link href={m.href}> 
                                {m.title} 
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar