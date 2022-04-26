import React from 'react'
import '../App.css'
import videos from '../components/assets/videos/video-3.mp4'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
    <div className='hero-container'>
        <video src={videos} autoPlay loop muted />
        <h1>WELCOME TO MY PAGE</h1>
        <p>David Chen</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
            
        </div>
        <p> Under Contruction </p>
    </div>
    )
}

export default HeroSection