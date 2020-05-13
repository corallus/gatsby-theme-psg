import React, { useContext, useState } from 'react'
import EventContext from '../../EventContext'
import { Tab, ButtonGroup, Nav } from 'react-bootstrap'
import Stage from './Stage'
import { Button } from 'react-bootstrap'

export default ({ highlighted = 2, numItems = null }) => {
  const { state } = useContext(EventContext)
  const { event } = state
  const { stages } = event.frontmatter
  const [key, setKey] = useState("0");

  return (
    <React.Fragment>
      {stages && stages.length > 1 ?
        <Tab.Container defaultActiveKey={key} id="stage-tabs" onSelect={k => setKey(k)}>
          <ButtonGroup className="mb-5" aria-label="Stages" size="sm">
          {stages.map((stage, index) => (
            <Button as={Nav.Link} key={index} eventKey={index} 
            // @ts-ignore
            variant="event-selector" active={index === key}>
              {stage.name}
            </Button>
          ))
          }
          </ButtonGroup>
          <Tab.Content>
          {stages.map((stage, index) => (
            <Tab.Pane key={index} eventKey={index}>
              <Stage highlighted={highlighted} numItems={numItems} acts={stage.acts} />
            </Tab.Pane>
          ))
          }
          </Tab.Content>
        </Tab.Container>
        :
        stages && stages.length > 0 &&
        <Stage highlighted={highlighted} numItems={numItems} acts={stages[0].acts} />
      }
    </React.Fragment>
  )
}

