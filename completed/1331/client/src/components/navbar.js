import React, {Component} from 'react';
import "./custumer.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>

                <div className="header">
                    <Navbar expand="md" style={{ backgroundColor: "rgb(28 32 31)" }}>
                        <NavbarBrand href="/" className="logo" >Simple <sub> view the future </sub> </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} style={{ border: "1px solid white", color: "white" }} > Expand </NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto navBar" navbar >
                                <NavItem className="li" >
                                    <Link to="/home">Home</Link>
                                </NavItem>
                                <NavItem className="li" >
                                    <Link to="/gallery">Gallery</Link>
                                </NavItem>
                                <NavItem className="li" >
                                    <Link to="/company">company</Link>
                                </NavItem>
                                <NavItem className="li" >
                                    <Link to="contacts" > Contacts </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/signIn">Sign In</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <div className="greenBar" />
                </div>
            </div>
        );
    }
}