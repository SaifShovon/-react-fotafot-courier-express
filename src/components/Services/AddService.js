import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //const url = 'http://localhost:5000/services';
        const url = 'https://grim-spell-56760.herokuapp.com/services';
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
        <div className="add-service">
            <h2>Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
                <textarea {...register("short_description")} placeholder="Short Description" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("delivery_duration")} placeholder="Delivery Duration in Days" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input  {...register("img")} placeholder="Example: service.jpg Store In: public/services" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;