
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = (props) => {
    const { service_id } = useParams();
    console.log(props.all_service);
    return (

        <div>
            <h3 className="bg-secondary py-3 my-3">Service Details</h3>
            {

                props.all_service.filter(service => service._id === service_id).map(service =>
                    <Row className="px-5 py-3" key={service._id}>
                        <Col className="col-md-12 col-sm-12 py-3"><Card className="text-center">
                            <Card.Header>{service.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{service.short_description}</Card.Title>
                                <img
                                    className="d-block w-100"
                                    src={`/services/${service.img}`}
                                    alt={service.title}
                                    style={{ height: '300px' }}
                                />
                                <Card.Text>
                                    {service.description}
                                </Card.Text>
                                <Card.Text>
                                    <b> Price:</b> {service.price}
                                </Card.Text>
                                <Card.Text>
                                    <b> Delivery Duration:</b>  {service.delivery_duration}
                                </Card.Text>
                                <Link to={`/addOrder/${service._id}`}><Button variant="primary">Order Now</Button></Link>
                            </Card.Body>
                        </Card>
                        </Col>

                    </Row>
                )
            }
        </div>
    );
};

export default ServiceDetails;