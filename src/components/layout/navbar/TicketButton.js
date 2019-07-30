import React from 'react'
import { Link } from 'gatsby';
import { MdArrowForward } from 'react-icons/md';

export default () => {
    return (
        <Link to="/tickets" className="btn btn-primary">
            TICKETS <MdArrowForward size={32} />
        </Link>
    )
}