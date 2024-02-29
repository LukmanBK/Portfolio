import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Intro from '../components/Intro/Intro'
const Home= () => {
    return(
        <>
        <header>
        <Navbar />
        </header>
        <main>
        <section id='accueil'>
            <Intro />
        </section>
        <section id='about'>
            <About />
        </section>
        </main>
        <footer id='contact'>
            <Footer />
        </footer>
        </>
    )
}

export default Home