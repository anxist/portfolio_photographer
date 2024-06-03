import React, { useState, useRef } from "react";
import Hamburger from "../Hamburger/hamburger";
import { StyledMenu, StyledLink } from "./menu.styled";
import {Navbar, Nav, Container} from "react-bootstrap";
import { useOnClickOutside } from "../../hooks";
import { Link } from "react-router-dom";

import About from "../About/About";
import Porotraits from "../Porotraits/Porotraits";
import Fashion from "../Fashion/Fashion";
import Motion from "../Motion/Motion";
import Contact from "../Contact/Contact";
import "../CSS/index.css"


const Menu = () => {
    const [open, setOpen] = useState(false); // Use boolean without importing
    const node = useRef(null);
    const close = () => setOpen(false);

    useOnClickOutside(node, () => setOpen(false));

    return (
        <div className="menu" ref={node}>
            <StyledMenu open={open}>
                <div className="about_us">
                    <div className="about_us_links">
                        <h1 className="name">WIll S.</h1>
                        <Link to="/">
                            <p className="link" >Home</p>
                        </Link>
                        <Link to="/about_us">
                            <p className="link" >About</p>
                        </Link>
                        <Link to="/porotraits">
                            <p className="link" >Porotraits</p>
                        </Link>
                        <Link to="/fashion">
                            <p className="link" >Fashion</p>
                        </Link>
                        <Link to="/motion">
                            <p className="link" >Motion</p>
                        </Link>
                        <Link to="/contact">
                            <p className="link" >Contact</p>
                        </Link>
                    </div>
                    <div className="contact_us">
                        <p>contact@yoursite.com</p>
                        <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                        <p>© {new Date().getFullYear()}, Narizhnyaya Diana</p>
                    </div>
                </div>
            </StyledMenu>
            <Hamburger open={open} setOpen={setOpen} />
        </div>
    );
};

export default Menu;