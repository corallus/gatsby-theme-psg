import React from 'react'
import {MdArrowForward} from 'react-icons/md';
import Knop from '../Button'

export default ({link, text}) => {
    return (
        <Knop to={link} className="btn btn-section">{text} <MdArrowForward size={32}/></Knop>
    )
}