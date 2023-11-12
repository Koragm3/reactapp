import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Mansection from '@components/Mansection'
import Logos from '../components/logos'
import Features from '../components/Features'
import Smantha from '../components/Smantha'
import Services from '../components/Services'
import Whyus from '../components/whyus'
import Project from '../components/Project'
import Teamsection from '../components/Teamsection'
import Articles from '../components/Articles'
import Searchbar from '../components/Searchbar'

const Home = () => {
  return (
    <>
    <Header/>
    <Mansection/>
    <Logos/>
    <Features/>
    <Smantha/>
    <Services/>
    <Whyus/>
    <Project/>
    <Teamsection/>
    <Articles/>
    <Searchbar/>
    <Footer/>
    
    </>
  )
}

export default Home