import React from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Tickets from '../../../../../gigi/src/components/Tickets'
import Social from "../../Social"
import useSiteMetadata from "../../SiteMetadata";
import Logo from "./Logo";
import './style.scss'
import { MdArrowForward } from "react-icons/md";

class Navbar_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: props.isHome,
      scroll: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      scroll: window.scrollY > this.props.showLogo
    })
  }

  render() {
    const { scroll, isHome } = this.state;
    return (
      <NavbarTemplate scroll={scroll} isHome={isHome}></NavbarTemplate>
    )
  }
}


const NavbarTemplate = ({ scroll, isHome }) => {
  const { menuItems, social, title, navbarBackground, navbarVariant } = useSiteMetadata()
  return (
    <Navbar bg={navbarBackground} variant={navbarVariant} fixed="top" expand="false" className={'container-fluid no-gutters' + (isHome ? ' is-home' : ' not-home') + (scroll ? ' scroll' : '')}>

      <div className="col order-1 col-sm-5 order-sm-3 text-right">
        <div className="d-none d-lg-inline-block">
          <ul className="nav">
            <Social social={social} />
            <li className="nav-item">
              <span className="nav-link">
                <Tickets />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col order-2 col-sm-2 text-center">
        {!isHome || scroll
          ?
          <Link to="/" className="navbar-brand">
            <Logo title={title} />
          </Link>
          : ''
        }
      </div>
      <div className="col order-3 col-sm-5 order-sm-1 text-right text-sm-left">
        <Navbar.Toggle aria-controls="basic-navbar-nav float-right float-sm-left text-light">
          <span className="mr-2 d-inline-block align-middle bar">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </span>
          <span className="d-none d-sm-inline">MENU</span>
        </Navbar.Toggle>
      </div>
      <Navbar.Collapse id="basic-navbar-nav" className="order-4 navbar-nav-left text-white">
        <Nav as="ul" className="text-uppercase main-menu">
          {menuItems.map((item, i) => (
            <li key={i} className="nav-item">
              {item.external
              ?
              <a href={item.link} rel="noopener noreferrer" className="nav-link" target="_blank">{item.name}</a>
              :
              <Link to={item.link} className="nav-link" activeClassName="active">{item.name}</Link>
              }
            </li>
          ))}
        </Nav>
        <div className="d-block d-lg-none">
          <Nav as="ul" className="nav-social my-2">
            <Social social={social} />
          </Nav>
          <Link to="/tickets" className="btn btn-tickets">
            TICKETS <MdArrowForward size={32} />
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar_
