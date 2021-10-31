import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import useAuth from '../hooks/AuthProvider';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    // const orderLinks = `http://localhost:5000/myorders/${user.email}`;
    const orderLinks = `https://grim-spell-56760.herokuapp.com/myorders/${user.email}`;
    useEffect(() => {
        fetch(orderLinks)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    //DElete an User
    const handleDeleteOrder = id => {
        //const url = `http://localhost:5000/orders/${id}`;
        const url = `https://grim-spell-56760.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted successfully!!!')
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders)
                }
            })
    }
    return (
        <div>
            <h3 className="bg-secondary py-3">My Orders</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Shipping Address</th>
                        <th>Billing Address</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>1</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.date}</td>
                            <td>{order.shipping_address}</td>
                            <td>{order.billing_address}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.status}</td>
                            <td>
                                <Link to={`/users/update/${order._id}`}>
                                    <button>Update</button>
                                </Link>
                            </td>
                            <td><button onClick={() => { if (window.confirm('Delete the item?')) { handleDeleteOrder(order._id) }; }}>X</button></td>
                        </tr>)
                    }


                </tbody>
            </Table>



        </div >
    );
};

export default MyOrders;