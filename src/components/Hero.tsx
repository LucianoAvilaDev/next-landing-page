import React from 'react'

import { Button } from './Button'
import { ToastContainer, toast, Slide, Flip } from 'react-toastify'

type Props = {
    id: string
    heading?: string
    message?: string
    button?: string
}

const Hero = ({ id, heading, message, button }: Props) => {
    const Msg = () => (
        <>
            <div className="flex flex-col justify-center text-center">
                <span>Cadastro realizado com sucesso!</span>
            </div>
        </>
    )

    return (
        <>
            <div
                id={id}
                className="flex items-center justify-center h-[35vw] opacity-90 bg-fixed bg-center bg-cover custom-img"
            >
                <div className="absolute top-0 left-0 right-0 bottom-0  h-[35vw] bg-black/40 z-[2]" />
                <div className="text-white z-[2] ml-[-[10rem]]">
                    <h2 className="text-5xl font-bold">{heading}</h2>
                    <p className="py-5 text-xl">{message}</p>
                    <Button
                        title={button ?? ''}
                        action={(
                            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                        ) => {
                            toast.success(<Msg />)
                        }}
                    />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="colored"
                transition={Flip}
            />
        </>
    )
}

export default Hero
