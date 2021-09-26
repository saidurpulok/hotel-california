import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom"
import './css/Navbar.css';

const Navigation = props => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { currentUser, logout } = useAuth();
    const navToggle = () => {
        setIsNavOpen(!isNavOpen);
    }
    const item = (currentUser) ? (<NavItem>
        <Link to="#" onClick={logout} className="nav-link active"><h5 style={{color:'grey'}}>Logout</h5></Link>
        </NavItem>) : (<NavItem>
                <Link to="/login" className="nav-link active"><h5 style={{color:'grey'}}>Login</h5></Link>
            </NavItem>)
    return (
        <div className="container">
            <Navbar light color="white" expand="md">
                    <NavbarToggler onClick={navToggle}/>
                    <NavbarBrand href="/" ><font face="Monospace" size="50px" color="#001D4F">Hotel California</font></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <NavItem>
                            <Link to="/" className="nav-link active"><h5 style={{color:'grey'}}>Home</h5></Link>
                        </NavItem>
                        {/* <NavItem>
                            <Link to="/featured" className="nav-link active"><h5 style={{color:'grey'}}>Featured</h5></Link>
                        </NavItem> */}
                        <NavItem>
                            <Link to="/rooms" className="nav-link active"><h5 style={{color:'grey'}}>Rooms</h5></Link>
                        </NavItem>
                        {item}
                    </Nav>
                    </Collapse>
            </Navbar>
        </div>
    );
}


export default Navigation;