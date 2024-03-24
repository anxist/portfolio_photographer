import React, { useState, useRef } from "react";
import Hamburger from "../Hamburger/hamburger";
import { StyledMenu, StyledLink } from "./menu.styled";


import { useOnClickOutside } from "../../hooks";

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    const close = () => setOpen(false);

    useOnClickOutside(node, () => setOpen(false));

    return (
        <div className="menu" ref={node}>
            <StyledMenu open={open}>
                <div className="about_us">
                    <div className="about_us_links">
                        <h1 className="name">WIll S.</h1>
                        <StyledLink className="link" onClick={() => close()}>Home</StyledLink>
                        <StyledLink className="link" onClick={() => close()}>About</StyledLink>
                        <StyledLink className="link" onClick={() => close()}>Porotraits</StyledLink>
                        <StyledLink className="link" onClick={() => close()}>Fashion</StyledLink>
                        <StyledLink className="link" onClick={() => close()}>Motion</StyledLink>
                        <StyledLink className="link" onClick={() => close()}>contact</StyledLink>
                    </div>
                    <div className="contact us">
                        <p>contact@yoursite.com</p>

                    </div>
                </div>
            </StyledMenu>
            <Hamburger open={open} setOpen={setOpen} />
        </div>
    );
};

export default Menu;