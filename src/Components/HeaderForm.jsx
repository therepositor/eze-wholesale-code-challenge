import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeaderForm = ({onChange, searchTerm, handleSubmit}) => {
    
    return (
        <div className='header-form'>
            <h2>SHOP OUR LATEST <br /> AVAILABLE STOCK HERE</h2>
            <form onSubmit={handleSubmit}>
                <input type='search'
                 id='search'
                 onChange={onChange}
                 value={searchTerm} placeholder='Enter search term (eg iphone X, 128GB or A1)' />
                <span className='search-icon'>
                    <input type="submit" value='SEARCH'/>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
                
            </form>
        </div>
    )
}

export default HeaderForm
