import React from 'react'
import mainNav from '../mainNav'

const StandardLayout = ({children}) => {
    return (
        <div>
            <mainNav/>
            {children}
        </div>
    )
}

export default StandardLayout
