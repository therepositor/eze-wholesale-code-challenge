import React from 'react';
import SideNavigation from './SideNavigation';
import Cards from './Cards'

const Main = ({gadgetsArr}) => {
    return (
        <div className='main'>
            <SideNavigation />
            <Cards gadgetsArr={gadgetsArr} />
        </div>
    )
}

export default Main
