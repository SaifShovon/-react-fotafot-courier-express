import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HappyCustomer = () => {
    return (
        <div>
            <Row className="px-5 py-3 ">
                <h3 className="bg-secondary py-3">Happy Customers</h3>

                <Col className="col-md-4 col-sm-12 py-3"><Card className="text-center">
                    <Card.Body>
                        <img
                            className="img-fluid rounded-circle"
                            src="happy_customers/1.png"
                            alt="happy customers first"
                            style={{ height: '300px' }}
                        />
                        <Card.Text>
                            Miss Mithulia
                        </Card.Text>

                    </Card.Body>
                </Card>
                </Col>
                <Col className="col-md-4 col-sm-12 py-3"><Card className="text-center">
                    <Card.Body>
                        <img
                            className="img-fluid rounded-circle"
                            src="happy_customers/2.jpg"
                            alt="happy customers first"
                            style={{ height: '300px' }}
                        />
                        <Card.Text>
                            Asker Media
                        </Card.Text>

                    </Card.Body>
                </Card>
                </Col>

                <Col className="col-md-4 col-sm-12 py-3"><Card className="text-center">
                    <Card.Body>
                        <img
                            className="img-fluid rounded-circle"
                            src="happy_customers/3.jpg"
                            alt="happy customers first"
                            style={{ height: '300px' }}
                        />
                        <Card.Text>
                            Samkos
                        </Card.Text>

                    </Card.Body>
                </Card>
                </Col>

            </Row>
        </div>
    );
};

export default HappyCustomer;