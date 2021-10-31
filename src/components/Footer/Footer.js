import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div>
            <Row className="mt-5">
                <Card className="text-center col-12">
                    <Card.Body className=" bg-secondary">
                        <Card.Title>Visit Our Corporate office</Card.Title>
                        <Card.Text>
                            145/A Block B, 145 no road.
                        </Card.Text>
                        <Card.Text>
                            Mirpur-10, Dhaka Noth City Corporation
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-dark text-muted">
                        <h3>Follow our social media to get update</h3>
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                        <span> </span>
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                        <span> </span>
                        <FontAwesomeIcon icon={faGoogle} size="lg" />
                        <span> </span>
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </Card.Footer>
                </Card>
            </Row>
        </div >
    );
};



export default Footer;