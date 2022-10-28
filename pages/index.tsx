import type { NextPage } from 'next'
import Head from 'next/head'
import ContentProject from '../src/components/ContentProject'
import ContentTools from '../src/components/ContentTools/ContentTools'
import ContentContacts from '../src/components/ContentContacts/ContentContacts'
import Hero from '../src/components/Hero'
import {
    AiOutlineInstagram,
    AiOutlineWhatsApp,
    AiOutlineLinkedin
} from 'react-icons/ai'
import Link from 'next/link'
import Footer from '../src/components/Footer/Footer'

const Home: NextPage = () => {
    return (
        <div className='w-full'>
            <Head>
                <title>Landing Page Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                id='home'
                heading="Landing Page Next App"
                message="Landing Page construída com Next.js e Tailwind"
                button="Cadastrar"
            />
            <ContentProject id="project" />
            <ContentTools id="tools" />
            <ContentContacts id="contact" />
            <Footer />
        </div>
    )
}

export default Home
