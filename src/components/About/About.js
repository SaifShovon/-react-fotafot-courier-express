import React from 'react';
import { Card } from 'react-bootstrap';

const About = (props) => {
    const all_service = props.all_service
    return (
        <div>
            <h3 className="bg-secondary py-3">About Us</h3>
            <Card className="text-center" >
                {all_service.map(service =>
                    <div key={service.id}>
                        <Card.Header as="h3"> {service.short_description}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {service.description}
                            </Card.Text>
                        </Card.Body>
                    </div >
                )}

            </Card>


        </div >
    );
};

export default About;