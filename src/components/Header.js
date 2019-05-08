import React from 'react';
import github from '../logos/github.png';
import gmail from '../logos/gmail.png';
import linkedin from '../logos/linkedin.png';
import twitter from '../logos/twitter.png';

import {
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

function Header() {
    return (
        <Navbar  color="light" dark expand="md">
            <Nav className="ml-auto" navbar>
           <NavItem>
               <NavLink href="https://www.linkedin.com/in/jhalaa/"><img height="40px" width="40px" src={linkedin}/></NavLink>
           </NavItem>
            <NavItem>
                <NavLink href="https://twitter.com/jhalaachinoy"><img height="40px" width="40px" src={twitter}/></NavLink>
           </NavItem>
            <NavItem>
                <NavLink href="https://github.com/jhalaa"><img height="40px" width="40px" src={github}/></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="mailto:jhalaachinoy@gmail.com"><img height="40px" width="40px" src={gmail}/></NavLink>
            </NavItem>
            <NavItem>
                <Button color="secondary">Resume</Button>{' '}
            </NavItem>
            </Nav>
        </Navbar>
);
}

export default Header;
