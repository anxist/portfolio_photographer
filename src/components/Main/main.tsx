import Menu from '../../components/Menu/Menu';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Gallary from './Gallary';

const Main = () => {

    return (
        <Container>
            <Menu></Menu>
            <Gallary></Gallary>
        </Container>
    );
};

export default Main;