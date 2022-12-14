import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { v4 } from 'uuid'

import { Navbar as Nb } from './types/Navbar'

const Navbar = ({ title, menus }: Nb) => {
    const [open, setOpen] = useState<number>(0)
    return (
        <div className='w-full'>
            <div className='fixed z-[3] w-full bg-[#ff9d00]/50'>
                <div className="px-4 w-full bg-[#ff9d00]/50">
                    <div className="flex py-4 justify-between">
                        <h2 className="flex text-3xl text-white">{title}</h2>
                        <ul className="hidden sm:flex items-center">
                            {menus?.map((m) => {
                                return (
                                    <li
                                        key={v4()}
                                        className="px-4 font-bold text-white hover:text-gray-200"
                                    >
                                        <Link href={m.href}>{m.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <AiOutlineMenu
                            size={32}
                            className="sm:hidden text-[#ff9d00c9] flex rounded-full bg-white/95 p-1 hover:bg-white/70 items-center justify-center"
                            onClick={() => {
                                setOpen(open === 100 ? 0 : 100)
                            }}
                        />
                    </div>
                </div>
                <div
                    className={
                        (open == 0 ? 'scale-y-0 ' : 'scale-y-100 ') +
                        `sm:hidden  transition-transform origin-top fixed z-[3] w-full bg-[#ff9d00]/50`
                    }
                >
                    <ul className="flex px-4 flex-col border-t-2 pb-2 border-white/30 w-full`">
                        {menus?.map((m) => {
                            return (
                                <li
                                    key={v4()}
                                    className="pt-2  font-bold text-white hover:text-gray-200"
                                >
                                    <Link href={m.href}>{m.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
