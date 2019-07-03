import React from 'react'
import { Link } from 'gatsby'
import { MdArrowForward } from 'react-icons/md';

const SectionTemplate = ( props ) => (
  <section className={"section section-"+props.name} style={{padding: '120px 0'}}>
    <header>
      <h2 className="text-center">{props.title} <strong className="text-primary">{props.lastWord}</strong></h2>
    </header>
    <div className="container">
      <div className="mb-4">
      { props.children }
      </div>
      {props.link !== undefined &&
        <div className="text-md-right">
          <Link to={props.link} className="btn btn-outline-primary">{props.linkName} <MdArrowForward size={32}/></Link>
        </div>
      }
    </div>
  </section>
)

class Section extends React.Component {
  render() {
    const titleArray = this.props.title.split(" ")
    const lastWord = titleArray.pop()
    const firstPart = titleArray.join(" ")
    return <SectionTemplate {...this.props} title={firstPart} lastWord={lastWord} />;
  }
}

export default Section