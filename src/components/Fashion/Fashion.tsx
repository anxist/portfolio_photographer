import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Menu from "../Menu/Menu";
import '../CSS/index.css';
import Fashion_gallary from "./Fashion_gallery"
class Fashion extends Component {
    render() {
        return (
            <Container>
                <Menu></Menu>
                <Fashion_gallary></Fashion_gallary>
            </Container>
        );
    }
}

export default Fashion;