import React from 'react'
import { Link } from 'gatsby';
import { MdArrowForward } from 'react-icons/md';

export default ({link, text}) => {
    return (
        <Link to={link} className="btn btn-info">{text} <MdArrowForward size={32} /></Link>
    )
}