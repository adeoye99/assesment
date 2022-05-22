import React from 'react'
import {NavLink,Nav,NavMenu, Bars} from "./Navbarcomponents";
import { Link } from "react-router-dom";
import "./nav.css";
function Navbar({toggle}) {
    return (
        <div>
        <Nav>
            <Bars onClick ={toggle}/>
                <NavMenu>
                    <NavLink to = "/Home">
                        Home
                    </NavLink>
                    <NavLink to = "/Men">
                         Men
                    </NavLink>
                    <NavLink to = "/Women">
                        Women
                    </NavLink>
                    <NavLink to = "/login">
                        Login
                    </NavLink>
                </NavMenu>          
        </Nav>
        </div>
            
        
    )
}

export default Navbar;
