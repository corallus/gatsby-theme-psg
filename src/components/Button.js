import React from 'react'
import {Button} from "react-bootstrap";
import {MdArrowForward} from "react-icons/md";

const Knop = ({variant, children, ...props}) => {
    return (
       <Button variant={variant} {...props}>
           {children} <MdArrowForward size={32} />
       </Button>
    )
}

export default Knop