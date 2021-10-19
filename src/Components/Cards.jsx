import React from 'react'
import Card from './Card'

const Cards = ({gadgetsArr}) => {
    console.log(gadgetsArr)
    return (
        <div className='cards'>
            <ul>
                {gadgetsArr && gadgetsArr.length > 0 ? gadgetsArr.map((gadget, id) => {
                    return (
                        <li key={id}>
                            <Card
                            id={gadget.id} 
                            brand={gadget.brand}
                            model={gadget.name}
                            hidden={gadget.hidden}
                            />
                        </li>

                    )   
                }) : <span>Loading...</span>}
            </ul>
             
        </div>
    )
}

export default Cards