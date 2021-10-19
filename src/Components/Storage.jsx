import React from 'react'
import {v4 as uuidv4 } from 'uuid'

const Storage = () => {
    return (
        <div className='storage'>
            <h2>Storage</h2>
            <ul>
                <li key={uuidv4()}>
                    <input type="radio" name="storage" id="storage-32gb" value='32GB'/>
                    <label htmlFor="storage-32gb">32GB</label>
                </li>
                <li key={uuidv4()}>
                    <input type="radio" name="storage" id="storage-64gb" value='64GB'/>
                    <label htmlFor="storage-64gb">64GB</label>
                </li>
                <li key={uuidv4()}>
                    <input type="radio" name="storage" id="storage-128gb" value='128GB'/>
                    <label htmlFor="storage-128gb">128GB</label>
                </li>
                <li key={uuidv4()}>
                    <input type="radio" name="storage" id="storage-256gb" value='256GB'/>
                    <label htmlFor="storage-256gb">256GB</label>
                </li>
            </ul>
        </div>
    )
}

export default Storage
