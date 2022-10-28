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
        <div>
            <div
                id={id}
                className="flex px-4 items-center justify-center h-screen opacity-90 bg-fixed bg-center bg-cover custom-img"
            >
                <div className="absolute top-0 left-0 right-0 bottom-0  h-screen bg-black/40 z-[2]" />
                <div className="flex flex-col text-center justify-center items-center text-white z-[2] ">
                    <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
                    <p className="py-5 text-md sm:text-xl">{message}</p>
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
                position="bottom-right"
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
        </div>
    )
}

export default Hero
