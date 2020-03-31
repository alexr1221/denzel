import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export const MovieNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="p-3">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Movies</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>Movies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Contact us</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText><i>Find your must-watch movie for tonight</i></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MovieNavBar;