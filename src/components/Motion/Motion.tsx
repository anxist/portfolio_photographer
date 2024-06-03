import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Menu from '../Menu/Menu'
import '../CSS/index.css';
import Player from '../Motion/Player';


class Motion extends Component {
    render() {
        return (
            <Container>
               <Menu></Menu>
               <Player></Player>
            </Container>
        );
    }
}

export default Motion;