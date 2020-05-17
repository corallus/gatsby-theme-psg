import React from 'react'
import Act from '../Act';
import {Col, Row} from 'react-bootstrap'
import './style.scss'

const Stage = ({highlighted = 2, numItems = null, acts}) => {
    return (
        <React.Fragment>
            {acts && acts.length
                ?
                <Row>
                    {acts.slice(0, highlighted).map((act, index) => (
                        <Col md={6} className="artist-highlighted" key={index}>
                            <Act act={act}/>
                        </Col>
                    ))}
                    {acts.slice(highlighted, numItems ? numItems : acts.length).map((act, index) => (
                        <Col md={4} key={index}>
                            <Act act={act}/>
                        </Col>
                    ))}
                </Row>
                :
                <h3 className="text-center">To be announced</h3>
            }

        </React.Fragment>
    )
}

export default Stage

