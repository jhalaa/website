import React, {Component} from 'react';
import {SocialIcon} from 'react-social-icons';
import Pdf from './resume.pdf'

import {
    Button,
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.openResume = this.openResume.bind(this);
    }

    openResume() {
        window.open("~/src/assets/resume.pdf", "_blank");
    }

    render() {
        return (
            <Navbar className="header" expand="md" sticky={'top'}>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <SocialIcon className="sIcon" url="https://www.linkedin.com/in/jhalaa/" fgColor="#fff"/>
                    </NavItem>
                    <NavItem>
                        <SocialIcon className="sIcon" url="https://twitter.com/jhalaachinoy" fgColor="#fff"/>
                    </NavItem>
                    <NavItem>
                        <SocialIcon className="sIcon" url="https://github.com/jhalaa" fgColor="#fff"/>
                    </NavItem>
                    <NavItem>
                        <SocialIcon className="sIcon" url="https://stackoverflow.com/users/5654110/jhalaa-chinoy" fgColor="#fff"/>
                    </NavItem>
                    <NavItem>
                        <SocialIcon className="sIcon" url="https://codepen.io/jhalaa/" fgColor="#fff"/>
                    </NavItem>
                    <NavItem>
                        <SocialIcon className="sIcon" url="mailto:jhalaachinoy@gmail.com" fgColor="#fff"/>
                    </NavItem>
                    <Button href={Pdf} target = "_blank" className="resumeBtn">Resume</Button>
                </Nav>
            </Navbar>
        );
    }

}

export default Header;
