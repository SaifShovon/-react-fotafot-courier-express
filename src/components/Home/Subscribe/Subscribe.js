import React from 'react';
import { Button, FormControl, InputGroup, Row } from 'react-bootstrap';
const Subscribe = () => {
    return (
        <div>
            <Row className="px-5 py-3 ">
                <h3 className="bg-secondary py-3">Subscribe for getting update</h3>
                <InputGroup size="lg">
                    <FormControl
                        placeholder="Recipient's Email"
                        aria-label="Recipient's Email"
                    />
                    <Button className=" mr-1" variant="outline-secondary">Subscribe</Button>
                </InputGroup>

            </Row >
        </div>
    );
};

export default Subscribe;