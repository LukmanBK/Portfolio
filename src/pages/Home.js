import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Home= () => {
    return(
        <>
        <header>
        <Navbar />
        </header>
        <main>
        <section id='accueil'>
            <h1>Home</h1>
        </section>
        </main>
        <footer id='contact'>
            <Footer />
        </footer>
        </>
    )
}

export default Home