import React from 'react';


const PriceFilter = () => {
    return (
        <div className='price-filter'>
            <h2>Price Filter</h2>
            <div className="filter-slider-container">
                <div className="filter-slider-line"></div>
                <div className="circle min-range"></div>
                <div className="circle max-range"></div>
                <div className="price min-price-range">$100</div>
                <div className="price max-price-range">$1000</div>
            </div>
            <form action="">
                <input className='input min-input' type="number" name="min" id="min" placeholder='min' />
                <div className='divider'>|</div>
                <input className='input max-input' type="number" name="max" id="max" placeholder='max' />
            </form>
        </div>
    )
}

export default PriceFilter
