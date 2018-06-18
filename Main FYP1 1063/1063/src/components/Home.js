import React from 'react';
import image from "./image.jpg";
import "./custumer.css"
import {
    Col,
    Button,
    Row,
    Table
} from 'reactstrap';

export default class Custumer extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                
                <div className="banner">
                    <Row>
                        <Col md={5} sm={5} className="img-responsive" >
                            <img className="img-responsive" src={image} alt="Lorem Ipsum Dollar" />
                        </Col>

                        <Col md={5} sm={5} xs={12} className="banner-text" >
                            <h2 className="h2-lorem"> Lorem Ipsum Dollarsit amt,
                                consecture adepscing elit.
                                </h2>
                            <p>
                                There is some text in the paragraph. There is some text in the paragraph. There is some text in the paragraph. There is some text in the paragraph.
                            </p>
                            <Button className="banner-btn" > Read More </Button>
                        </Col>
                    </Row>
                </div>

                <section>
                    <Row>
                        <Col md={7} className="welcome-website" >
                            <h1> Welcome to our Website </h1>
                            <div style={{ border: "2px solid green", width: "20%" }} />
                            <p style={{ fontWeight: "bold" }} >
                                There is some text in the paragraph. There is some text in the paragraph.
                                There is some text in the paragraph. There is some text in the paragraph.
                                There is some text in the paragraph. There is some text in the paragraph.
                            </p>
                            <p>
                                There is some text in the paragraph. There is some text in the paragraph.
                                There is some text in the paragraph. There is some text in the paragraph.
                                There is some text in the paragraph. There is some text in the paragraph.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        This is a list item. This is a list item. This is a list item.
                                        This is a list item. This is a list item. This is a list item.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        This is a list item. This is a list item. This is a list item.
                                        This is a list item. This is a list item. This is a list item.
                                    </p>
                                </li>
                            </ul>
                            <div style={{ borderLeft: "10px solid rgb(184, 195, 126)", paddingLeft: "15px" }}>
                                <p>
                                    There is some text in the paragraph. There is some text in the paragraph.
                                    There is some text in the paragraph. There is some text in the paragraph.
                                    There is some text in the paragraph. There is some text in the paragraph.
                                    There is some text in the paragraph. There is some text in the paragraph.
                                    There is some text in the paragraph. There is some text in the paragraph.
                                </p>
                            </div>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={4} className="latestNews" >
                            <div>

                                <Table>
                                    <thead>
                                        <tr>
                                            <th>  Latest News </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ background: 'rgb(238, 238, 238)' }} >
                                                <Row>
                                                    <Col md={4} sm={4}>
                                                        <img src={image} alt="Lorem Ipsum Dollar" />
                                                    </Col>
                                                    <Col md={8} sm={8}>
                                                        <span> June 6 2018 </span>
                                                        <p className="image-heading"> Lorem Ipsum Dollarsit </p>
                                                        <p>
                                                            this is a text paragraph about.
                                                            this is a text paragraph about.
                                                    </p>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ background: 'rgb(223, 223, 223)' }} >
                                                <Row>
                                                    <Col md={4} sm={4}>
                                                        <img src={image} alt="Lorem Ipsum Dollar" />
                                                    </Col>
                                                    <Col md={8} sm={8}>
                                                        <span> June 6 2018 </span>
                                                        <p className="image-heading"> Lorem Ipsum Dollarsit </p>
                                                        <p>
                                                            this is a text paragraph about.
                                                            this is a text paragraph about.
                                                    </p>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ background: 'rgb(238, 238, 238)' }} >
                                                <Row>
                                                    <Col md={4} sm={4}>
                                                        <img src={image} alt="Lorem Ipsum Dollar" />
                                                    </Col>
                                                    <Col md={8} sm={8}>
                                                        <span> June 6 2018 </span>
                                                        <p className="image-heading"> Lorem Ipsum Dollarsit </p>
                                                        <p>
                                                            this is a text paragraph about.
                                                            this is a text paragraph about.
                                                    </p>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </section>

            </div>
        );
    }
}