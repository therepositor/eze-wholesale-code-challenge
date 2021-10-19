import React from 'react';
import { v4 as uuidv4} from 'uuid'

const Categories = () => {
    return (
        <div>
            <h2>Categories</h2>
            <ul>
            <li key={uuidv4()}>All</li>
            <li key={uuidv4()}>Iphone</li>
            <li key={uuidv4()}>Samsung</li>
            <li key={uuidv4()}>Ipad</li>
            <li key={uuidv4()}>Macbook</li>
            <li key={uuidv4()}>Airpods</li>
        </ul>
        </div>
        
    )
}

export default Categories
