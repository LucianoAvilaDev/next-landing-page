import React from 'react'

type Props = {
    id: string
}

const ContentContacts = ({ id }: Props) => {
    return (
        <div id={id}>
            <div className="flex items-center justify-center w-full min-h-[30vw] bg-black/90">
                <div className="flex flex-col sm:flex-row justify-between border-gray-100 lg:w-2/4 sm:w-3/4 align-center py-6">
                    <div className="flex flex-col px-4 ">
                        <div className="text-center sm:text-justify py-6 text-3xl text-white/80">
                            Landing Page
                        </div>
                        <div className="sm:text-start text-justify pt-4 text-sm text-white/80">
                            Landing Page - um projeto de estudo em React +
                            Nextjs
                        </div>
                        <div className="sm:text-start text-justify text-sm text-white/80">
                            Desenvolvido por{' '}
                            <span className="font-bold text-lg">
                                Luciano Ávila
                            </span>
                        </div>
                        <div className="sm:text-start text-justify text-sm text-white/80">
                            Rua Washington Drumond, nº 165, Centro
                        </div>
                        <div className="sm:text-start text-justify text-sm text-white/80">
                            Bocaiúva, MG - Brasil
                        </div>
                    </div>
                    <div className="flex flex-col px-4">
                        <div className="py-6 text-2xl text-white/80">
                            Contatos
                        </div>

                        <div className="text-xl pb-2 font-bold text-white/80">
                            Luciano Thadeu Ávila Diniz
                        </div>
                        <div className="text-sm text-white/80">
                            De segunda a sexta de 08:00 as 18:00.
                        </div>
                        <div className="text-sm text-white/80">
                            Whatsapp: (38) 9 9987 8646
                        </div>
                        <div className="text-sm text-white/80">
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
