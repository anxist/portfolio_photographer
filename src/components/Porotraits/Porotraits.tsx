import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Menu from '../Menu/Menu';
import '../CSS/index.css';
import Porotraits_gallary from '../Porotraits/Porotraits_gallary';
class Porotraits extends Component {
    render() {
        return (
            <Container>
                <Menu></Menu>
                <Porotraits_gallary></Porotraits_gallary>
            </Container>
        );
    }
}

export default Porotraits;