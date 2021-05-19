import React, {Component,Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/image/normallogo.png'
import blueLogo from '../../asset/image/scrolllogo.png'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {Link, NavLink} from "react-router-dom";
class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navVariant:'dark',
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll', navBarLogo:[blueLogo], navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar  className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand ><Link className={this.state.navBarTitle} to="/"><img className="logosize" src={this.state.navBarLogo}/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link> <NavLink exact activeStyle={{color:"#03B2FCFF"}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link>  <NavLink exact activeStyle={{color:"#03B2FCFF"}} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:"#03B2FCFF"}} className={this.state.navBarItem} to="course">COURSES</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:"#03B2FCFF"}} className={this.state.navBarItem} to="portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:"#03B2FCFF"}} className={this.state.navBarItem} to="contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:"#03B2FCFF"}} className={this.state.navBarItem} to="about">ABOUT</NavLink></Nav.Link>
    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}
export default TopNavigation;
