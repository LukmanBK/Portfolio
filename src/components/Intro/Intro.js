import React from 'react'
import './intro.css'
import IntroImg from '../../assets/work.webp'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='mask'>
            <img className="intro-img" src={IntroImg} alt="image de l'environnement de travail" />
        </div>
        <div className='content'>
            <p>Bonjour je suis Lukman, passionné par le développement web</p>
            <h1>Developpeur Front-End.</h1>
            <Link to='/projet' className='btn'>Projets</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
    </div>
  )
}

export default Intro