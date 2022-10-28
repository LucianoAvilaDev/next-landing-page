import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="flex sm:flex-row flex-col items-center justify-center py-8 bg-black/95 border-t border-gray-100/30 w-full align-center">
            <div className="text-white px-2">
                Desenvolvido por <span className='font-bold text-sm sm:text-lg'>Luciano Ávila</span>
            </div>
            <div className='flex pt-4 sm:pt-0 '>
                <Link href="https://wa.me/5538999878646" target="_blank">
                    <a target={'_blank'}>
                        <AiOutlineWhatsApp
                            title="Whatsapp"
                            size="24"
                            className="text-white hover:cursor-pointer mx-2"
                        />
                    </a>
                </Link>
                <Link href="https://www.instagram.com/lucianothadeuavila/">
                    <a target={'_blank'}>
                        <AiOutlineInstagram
                            title="Instagram"
                            size="24"
                            className="text-white hover:cursor-pointer mx-2"
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Footer
