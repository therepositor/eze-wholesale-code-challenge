import React from 'react'
import image from './apple-iphone-13.jpg'
const Card = ({id, brand, model, hidden}) => {
    return (
        <div className='card'>
            <div className="phone-grade">A</div>
            <div className="phone-image-container">
                <img src={image} alt="avatar" />
            </div>
            <p className='phone-model'>{model}</p>
            <div className='unlocked-container'>
                 <span className='unlock'>Unlocked</span><span>|</span><span className='phone-size'>256GB</span>
            </div>
            <p className='unit-price'>Unit price</p>
            <h3>$450</h3>
            <p className='available-phones'>1500 Available</p>
            <button type="submit">BUY</button>
        </div>
    )
}

export default Card
