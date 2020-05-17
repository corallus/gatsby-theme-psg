import React from 'react'
import {Badge} from 'react-bootstrap';
import './style.scss'

const EarlyBirdPrice = ({price}) => {
    return (
        <>
            <Badge variant="danger" className="text-uppercase">Early bird</Badge>
            <div className="regular-price">
                €{price.toFixed(2)}
            </div>
        </>
    )
}

export default EarlyBirdPrice

