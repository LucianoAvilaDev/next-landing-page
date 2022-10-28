import React from 'react'

type Props = {
    id: string
}

const ContentProject = ({ id }: Props) => {
    return (
        <div
            id={id}
            className="flex w-full h-auto py-12 bg-gray-300 items-center justify-center"
        >
            <div className="w-full text-center text-gray-700 z-[2] ml-[-[10rem]]">
                <h2 className="text-3xl sm:text-5xl py-4 sm:py-6 mb-12 border-orange-800/30 border-b mx-4 md:mx-48">
                    Sobre o Projeto
                </h2>
                <p className="text-justify py-6 mx-4 md:px-48 text-md sm:text-xl ">
                    Projeto de uma Landing Page desenvolvido com intuito de
                    aprendizado utilizando Typescript e React com os frameworks
                    Next.js com Tailwind.
                </p>
                <p className="text-justify py-6 mx-4 md:px-48 text-md sm:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus fringilla, neque non mattis dignissim, lectus diam
                    dictum libero, vitae maximus nisl ex non felis. Nulla
                    suscipit iaculis laoreet. Pellentesque vulputate diam purus,
                    quis commodo magna porttitor at. Quisque vitae urna
                    vestibulum, auctor orci quis, tempus sem. Mauris rutrum,
                    libero et finibus euismod, tortor felis dictum eros, nec
                    porta elit enim non lacus. Aliquam varius purus urna, eget
                    tincidunt tortor laoreet vitae. Sed rhoncus lacinia sapien
                    in consectetur. Donec nec congue tortor, euismod commodo
                    neque. Ut vehicula suscipit gravida. Mauris mi libero,
                    gravida a finibus non, aliquam a nisi. Ut vitae erat nec
                    urna molestie convallis. Ut ac fermentum risus. Nam auctor
                    leo elit.
                </p>
            </div>
        </div>
    )
}

export default ContentProject
