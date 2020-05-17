import React from 'react'
import './style.scss'

const RegularPrice = ({price}) => {
    return (
        <span className={`current-price`}><small>€</small> {price.toFixed(2)}</span>
    )
}

export default RegularPrice

