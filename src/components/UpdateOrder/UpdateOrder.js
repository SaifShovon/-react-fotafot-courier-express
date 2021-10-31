import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Col, Form, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const UpdateOrder = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({})
    useEffect(() => {
        //const url = `http://localhost:5000/orders/${id}`;
        const url = `https://grim-spell-56760.herokuapp.com/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, []);

    const handleUpdateOrder = e => {
        //const url = `http://localhost:5000/orders//orders/${id}`;
        const url = `https://grim-spell-56760.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Updated');
                    setOrder({})
                }
                else {
                    alert('Not Updated');
                }
            })
        e.preventDefault();
    }
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.name = updatedName;
        setOrder(updatedOrder);
    }
    const handleShippingAddess = e => {
        const updatedShippingAddess = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.shipping_address = updatedShippingAddess;
        setOrder(updatedOrder);
    }
    const handleBillingAddess = e => {
        const updatedBillingAddess = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.billing_address = updatedBillingAddess;
        setOrder(updatedOrder);
    }
    const handleQuantity = e => {
        const updatedQuantity = e.target.value;
        const updatedOrder = { ...order };
        updatedOrder.quantity = updatedQuantity;
        setOrder(updatedOrder);
    }

    return (
        <div className="update-order">
            <h2>Update an Order</h2>
            <Form className=" mx-5" onSubmit={handleUpdateOrder}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={handleNameChange} value={order.name} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control placeholder="Shipping Address" onChange={handleShippingAddess} value={order.shipping_address} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" onChange={handleBillingAddess} value={order.billing_address} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control placeholder="Quantity" onChange={handleQuantity} value={order.quantity} />
                </Form.Group>



                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default UpdateOrder;