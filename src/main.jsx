import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './About'
import Footer from './Footer'
import Info from './Info'
import Interests from './Interests'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='main-container'>
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>   
)
