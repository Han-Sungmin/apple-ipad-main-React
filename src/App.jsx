import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Power from './components/Power'
import Display from './components/Display'
import Camera from './components/Camera'
import Wireless from './components/Wireless'
import Accessories from './components/Accessories'
import iPadOS from './components/iPadOS'
import Apps from './components/Apps'
import Privacy from './components/Privacy'
import Accessibility from './components/Accessibility'
import AR from './components/AR'
import Environment from './components/Environment'
import AccessoryShop from './components/AccessoryShop'
import Trade from './components/Trade'
import Compare from './components/Compare'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <Power />
        <Display />
        <Camera />
        <Wireless />
        <Accessories />
        <iPadOS />
        <Apps />
        <Privacy />
        <Accessibility />
        <AR />
        <Environment />
        <AccessoryShop />
        <Trade />
        <Compare />
      </main>
      <Footer />
    </div>
  )
}

export default App
