import { randomUUID } from 'crypto'
import Img from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Links } from './Links'

type Props = {
    id: string
}

const ContentTools = ({ id }: Props) => {
    return (
        <div
            id={id}
            key={id}
            className="flex w-full h-auto py-12 bg-black/80 items-center justify-center"
        >
            <div className="text-center w-full sm:w-3/4 text-gray-700 z-[2] ml-[-[10rem]]">
                <h2 className="text-5xl text-white/90 pt-4 mb-8  mx-24 md:mx-48">
                    Ferramentas utilizadas
                </h2>
                <div className="flex justify-between border-white/80 border-t py-16">
                    {Links.map((link) => {
                        return (
                            <a
                                key={link.tooltip}
                                href={link.url}
                                className="transition-transform scale-100 hover:scale-[1.15] duration-300"
                            >
                                <Img
                                    key={link.tooltip}
                                    className="cursor-pointer "
                                    title={link.tooltip}
                                    src={link.imageSrc}
                                    width={link.imgWidth}
                                    height={link.imgHeight}
                                />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ContentTools
