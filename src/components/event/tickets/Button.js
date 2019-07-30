import React from 'react'
import { Button } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md';

export default ({url}) => {
    return (
        <Button href={url} className="btn btn-info">
          Koop ticket <MdArrowForward size={32} />
        </Button>
    )
}