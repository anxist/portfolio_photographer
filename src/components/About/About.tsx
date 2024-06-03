import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Menu from '../../components/Menu/Menu';
import '../CSS/index.css';


class About extends Component {
    render() {
        return (
            <div>
              <Menu></Menu>
                <Container>
                    <div className="about">
                        <h2>
                            Labore accusam in modo compungi, iacentem substantiales um se sed esse haec.
                        </h2>
                        <div className="about_text_flex">
                            <div className="text_about">
                                <p>
                                    Neque diam congue enim, facilisis et, nec. Lacus, phasellus neque placerat euismod. Ut risus, sed in risus, sociis quis volutpat sed. Urna diam tellus massa risus lorem. Lectus turpis amet nunc vitae massa leo.
                                </p>
                            </div>
                            <div className="text_about">
                                <p>Bibendum pharetra, faucibus mattis commodo cursus enim pulvinar pellentesque. Nisl purus sapien posuere porta ut molestie dignissim id ac. Facilisis dignissim massa nunc arcu, quis.</p>
                            </div>
                        </div>
                        <div className="work_history">
                            <div className="history">
                                <div className="data">
                                    <p>2007 - 2012</p>
                                </div>
                                <div className="job">
                                    <h4>Creative Agency Inc.: Design head</h4>
                                    <p>iacentem substantiales um se sed esse haec Possit facis qui a a a patriam.</p>
                                </div>
                            </div>
                            <div className="history">
                                <div className="data">
                                    <p>2013 - present</p>
                                </div>
                                <div className="job">
                                    <h4>Studio Alpha.: Project Manager</h4>
                                    <p>iacentem substantiales um se sed esse haec Possit facis qui a a a patriam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default About;