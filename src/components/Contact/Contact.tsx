import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import '../CSS/index.css';
import {Container} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Container>
               <Menu/>
            </Container>
        );
    }
}

export default Contact;