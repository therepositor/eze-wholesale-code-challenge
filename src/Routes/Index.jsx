import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import Header from '../Components/Header'
import Main from '../Components/Main'

const Index = ({gadgetsArr, onChange, searchTerm, handleSubmit}) => 
     (
        <BrowserRouter>
            <Header
                gadgetsArr={gadgetsArr} 
                onChange={onChange}
                searchTerm={searchTerm}
                handleSubmit={handleSubmit} />
            <Main gadgetsArr={gadgetsArr} />
        </BrowserRouter>
    )


export default Index
