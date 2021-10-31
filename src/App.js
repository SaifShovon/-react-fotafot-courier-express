import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AuthProvider from './components/context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ServiceDetails from './components/Services/ServiceDetails';
import Profile from './components/Profile/Profile';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import { useState, useEffect } from 'react';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import UpdateOrder from './components/UpdateOrder/UpdateOrder';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddService from './components/Services/AddService';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const serviceLink = `https://grim-spell-56760.herokuapp.com/services`;
  //const serviceLink = `http://localhost:5000/services`;

  useEffect(() => {
    fetch(serviceLink)
      .then(res => res.json())
      .then(data => setServices(data));
    setIsLoading(false)
  }, []);


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home all_service={services} isLoading={isLoading}></Home>
            </Route>
            <Route path="/home">
              <Home all_service={services}></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About all_service={services}></About>
            </Route>
            <PrivetRoute path="/profile">
              <Profile></Profile>
            </PrivetRoute>
            <PrivetRoute path="/addService">
              <AddService></AddService>
            </PrivetRoute>
            <PrivetRoute path="/addOrder/:service_id">
              <PlaceOrder all_service={services}></PlaceOrder>
            </PrivetRoute>
            <PrivetRoute path="/users/update/:id">
              <UpdateOrder></UpdateOrder>
            </PrivetRoute>
            <PrivetRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivetRoute>
            <PrivetRoute path="/manageOrder">
              <ManageOrders></ManageOrders>
            </PrivetRoute>
            <PrivetRoute exact path="/service/:service_id">
              <ServiceDetails all_service={services} ></ServiceDetails>
            </PrivetRoute>

            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
