import React from 'react'
import { Button } from './Button'
import ContentBody from './ContentProject'

type Props = {
    heading?: string
    message?: string
    button?: string
}

const Hero = ({ heading, message, button }: Props) => {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
            <div className="text-white z-[2] ml-[-[10rem]]">
                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                <Button
                    title={button ?? ''}
                    action={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                        alert(e.currentTarget.innerHTML)
                    }}
                />
            </div>
        </div>
    )
}

export default Hero
