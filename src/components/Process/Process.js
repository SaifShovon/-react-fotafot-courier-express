import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Process = () => {
    return (
        <div>
            <Row className="px-5 py-3 ">
                <h3 className="bg-secondary py-3">Our Working Process</h3>
                <Row className="">
                    <Col><img src="/process/1.png" alt="booking" /></Col>
                    Booking<Col><img src="/process/2.png" alt="packing" /></Col>
                    Packing<Col><img src="/process/3.png" alt="transportation" /></Col>
                    Transportation<Col><img src="/process/4.png" alt="delivery" /></Col>
                    Delivery
                </Row>
            </Row>
        </div >
    );
};

export default Process;