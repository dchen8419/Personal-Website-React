import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img9 from '../components/assets/images/img-9.jpg';
import img2 from '../components/assets/images/img-2.jpg';
import img1 from '../components/assets/images/img-1.jpg';
import img4 from '../components/assets/images/img-4.jpg';
import img5 from '../components/assets/images/img-5.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src={img9} text="Explore Victoria Peak" label="Adventure" path='/services'
                        />
                        <CardItem 
                        src={img2} text="Adorable Wedding Photos with the Lunas" label="Dogs" path='/products'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src={img1} text="Head shots" label="Groom" path='/products'
                        />
                        <CardItem 
                        src={img4} text="Catch tours of Tokyo" label="Services" path='/services'
                        />
                        <CardItem 
                        src={img5} text="Find 5 star Hotels" label="Lodging" path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards