import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='aboutDiv' >
                    <img className='aboutPic' src='https://themustardseedproject.org/wp-content/uploads/2018/06/Yoga-Logo-Element-Template-Graphic-999x999.png' alt='' />
                    <p className='aboutParagraph'>There is nothing more powerful than love in this world. Yoga is all about love, it is all about acceptance. Yoga is a combination of freedom and release.Yoga means ‘union’ or ‘connection’. In Sanskrit, the word ‘yoga’ is used to signify any form of connection. Yoga is both a state of connection and a body of techniques that allow us to connect to anything.

Conscious connection to something allows us to feel and experience that thing, person, or experience. The experience of connection is a state of yoga, a joyful and blissful, fulfilling experience.

Awareness is the secret of yoga.</p>                
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
