import React from 'react'
import image from './laptop-tab-phone.png';

const HeaderImage = () => {
    return (
        <div className='header-image'>
            <img src={image} alt="dummy phone, tablet and laptop" />
        </div>
    )
}

export default HeaderImage
