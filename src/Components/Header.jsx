import React from 'react';
import HeaderForm from './HeaderForm';
import HeaderImage from './HeaderImage';

const Header = ({searchTerm, onChange, handleSubmit }) => {
    return (
        <header>
            <HeaderForm
                searchTerm={searchTerm}
                onChange={onChange}
                handleSubmit={handleSubmit} />
            <HeaderImage />
        </header>
    )
}

export default Header
