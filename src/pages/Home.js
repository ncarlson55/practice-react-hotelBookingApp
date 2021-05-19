import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <Hero />
    )
}

Hero.defaultProps= {
    hero: "defaultHero"
}

export default Home

