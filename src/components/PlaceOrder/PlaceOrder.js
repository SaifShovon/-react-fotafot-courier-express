import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/AuthProvider';
import './PlaceOrder.css';
const PlaceOrder = (props) => {
    const { user } = useAuth();
    const { service_id } = useParams();
    var service = props.all_service.filter(service => service._id === service_id);

    const url = 'https://grim-spell-56760.herokuapp.com/orders';
    //const url = 'http://localhost:5000/orders';
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        data.email = user.email;
        data.status = "Pending";
        data.service_name = service[0].name;
        data.price = service[0].price;
        data.delivery_duration = service[0].delivery_duration;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(resData => {
                console.log(resData)
                if (resData.insertedId) {
                    alert('Inserted Successfully!!!')
                    reset({})
                }
            })
    }
    return (
        <div className="add-order">
            <h2>Add an Order- {service[0].name}</h2>
            <h5><b> Your Name:</b> {user.displayName}</h5>
            <h5><b> Your Email:</b> {user.email}</h5>
            <p><b> Price:</b> {service[0].price}</p>
            <p><b> Delivery Days:</b> {service[0].delivery_duration}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input type="date" {...register("date")} placeholder="Date" />
                <textarea {...register("shipping_address")} placeholder="Shipping Address" />
                <textarea {...register("billing_address")} placeholder="Billing Address" />
                <input type="number" {...register("quantity")} placeholder="Quantity" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;