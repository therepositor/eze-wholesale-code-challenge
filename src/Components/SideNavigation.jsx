import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Categories from './Categories';
import PriceFilter from './PriceFilter';
import Storage from './Storage';
import AddButton from './AddButton';

const SideNavigation = () => {
    return (
        <nav className='side-navigation'>
            <ul>
            <li key={uuidv4()}>
                <Categories />
            </li>
            <li key={uuidv4()}>
                <PriceFilter />
            </li>
            <li key={uuidv4()}>
                <Storage />
            </li>
        </ul>
        <AddButton />
        </nav>
        
    )
}

export default SideNavigation
