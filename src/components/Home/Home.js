import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Services from '../Services/Services';
import Slider from './Slider/Slider';
import HappyCustomer from './HappyCustomer/HappyCustomer';
import Subscribe from './Subscribe/Subscribe';
import Process from '../Process/Process';
const Home = (props) => {
    const all_service = props.all_service;
    const isLoading = props.isLoading;
    if (isLoading) {
        return <div><Spinner animation="border" variant="primary" /></div>;
    }

    return (
        <div>
            <Slider></Slider>
            <Row className="px-5 py-3 ">
                <h3 className="bg-secondary py-3">Our Services</h3>
                {all_service.map(service =>
                    <Services key={service._id} service={service}></Services>
                )}

            </Row>

            <Process></Process>
            <HappyCustomer></HappyCustomer>
            <Subscribe></Subscribe>

        </div >
    );
};

export default Home;