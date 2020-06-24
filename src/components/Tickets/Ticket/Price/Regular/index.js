import React from 'react'

const RegularPrice = ({price}) => {
    return (
        <span className={`current-price`}><small>€</small> {price.toFixed(2)}</span>
    )
}

export default RegularPrice

