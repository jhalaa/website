import React, {Component} from 'react';
import {Jumbotron, Button, Navbar, Nav, NavItem} from 'reactstrap';
import Education from './Education';
import Skills from "./Skills";
import Experience from "./Experience";
import {Cat} from 'react-kawaii';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {mood:"happy"};
        this.changeMood = this.changeMood.bind(this);
        this.changeMood();
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    changeMood() {
        this.setState({mood:this.state.mood=="happy"?"blissful":"happy"});
        setTimeout(this.changeMood,1000);
    }

    render() {
        return (
            <div>
                <Jumbotron id="myJumbo">
                    <div className="row">
                        <div className="col" >
                        <h1 className="display-3">Hello, My name is Jhalaa!</h1>
                        <p className="lead">I'm a full stack/front end developer and love building creative and innovative web applications.</p>
                        <hr className="my-2"/>
                        <p> Complex issues and problem solving excite me! I create amazing, dynamic products by building reusable, efficient components.</p>
                        <div className="jsContainer">
                            <div className="heart"></div>
                            <span>Javascript</span>
                            <div className="heart"></div>
                        </div>



                         <p className="lead">
                            <Button onClick={()=> window.scrollTo(0,500)} className="learnMore">Learn More</Button>
                        </p>
                    </div>
                     <Cat size={320} mood={this.state.mood} color="#ccc1ff"/>

                    </div>

                </Jumbotron>
                <div className="stickyNav">
                    <Nav className="secondNav">
                        <NavItem>
                            <span className="p-5">Experience</span>
                        </NavItem>
                        <NavItem>
                            <span className="p-5">Education</span>
                        </NavItem>
                        <NavItem>
                            <span className="p-5">Skills</span>
                        </NavItem>
                    </Nav>
                </div>
                <Experience/>
                <Education/>
                <Skills/>
            </div>
        );

    }
}

export default Content;
