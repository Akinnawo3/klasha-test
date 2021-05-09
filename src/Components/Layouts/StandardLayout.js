import React from 'react'
import MainNav from '../mainNav'

const StandardLayout = ({children}) => {
    return (
        <div>
            <MainNav/>
        
            {children}
        </div>
    )
}

export default StandardLayout
