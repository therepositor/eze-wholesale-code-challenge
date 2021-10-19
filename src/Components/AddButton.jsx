import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const AddButton = () => {
    return (
        <span className='add-button'>
            <FontAwesomeIcon icon={faPlus} />
        </span>
    )
}

export default AddButton
