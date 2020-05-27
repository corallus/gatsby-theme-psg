import React from 'react'
import Button from '../Button'

export default ({children, ...props}) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}