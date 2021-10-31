import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Services = (props) => {
    const { _id, name, short_description, description, price, delivery_duration, img } = props.service;

    return (

        <Col className="col-md-6 col-sm-12 py-3"><Card className="text-center">
            <Card.Header>
                {name.slice(0, 40)}</Card.Header>
            <Card.Body>
                <Card.Title>{short_description.slice(0, 60)}</Card.Title>
                <img
                    className="d-block w-100"
                    src={`/services/${img}`}
                    alt={name}
                    style={{ height: '300px' }}
                />
                <Card.Text>
                    {description.slice(0, 200)} ...
                </Card.Text>
                <Card.Text>
                    <b> Price:</b> {price}
                </Card.Text>
                <Card.Text>
                    <b> Delivery Duration:</b>  {delivery_duration}
                </Card.Text>
                <Link to={`/service/${_id}`}><Button variant="primary">View Details</Button></Link>

            </Card.Body>
        </Card>
        </Col>


    );
};

export default Services;