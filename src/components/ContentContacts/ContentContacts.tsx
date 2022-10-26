import React from 'react'

type Props = {
    id: string
}

const ContentContacts = ({ id }: Props) => {
    return (
        <div id={id}>
            <div className="flex items-center justify-center w-full min-h-[30vw] bg-black/90">
                <div className="flex justify-between border-gray-100 w-2/4 align-center">
                    <div className="flex flex-col">
                        <div className="py-6 text-5xl text-white/80">
                            Landing Page
                        </div>
                        <div className="pt-4 text-md text-white/80">
                            Landing Page - um projeto de estudo em React +
                            Nextjs
                        </div>
                        <div className="text-md text-white/80">
                            Desenvolvido por{' '}
                            <span className="font-bold text-lg">
                                Luciano Ávila
                            </span>
                        </div>
                        <div className="text-md text-white/80">
                            Rua Washington Drumond, nº 165, Centro
                        </div>
                        <div className="text-md text-white/80">
                            Bocaiúva, MG - Brasil
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="py-6 text-3xl text-white/80">
                            Contatos
                        </div>

                        <div className="text-xl pb-2 font-bold text-white/80">
                            Luciano Thadeu Ávila Diniz
                        </div>
                        <div className="text-md text-white/80">
                            De segunda a sexta de 08:00 as 18:00.
                        </div>
                        <div className="text-md text-white/80">
                            Whatsapp: (38) 9 9987 8646
                        </div>
                        <div className="text-md text-white/80">
                            Email: luciano.avila.dev@outlook.com
                        </div>
                        <div className="text-xl pt-6  text-white/80">
                            Será um prazer te atender!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentContacts
