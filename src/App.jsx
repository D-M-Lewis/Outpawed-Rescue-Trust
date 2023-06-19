import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Links from './Links'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Navbar />
        <Links />
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
