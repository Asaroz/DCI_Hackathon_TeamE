
import Nav from './Nav.js';
import Home from './Home.js'
import '../css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import footer from '../imgs/Footer.png'
import Menu from './Menu.js'
import {  useState } from 'react';
import Reviews from './Reviews.js'





function  App() {
  const [orders,setOrders]= useState()
  if(!orders){
     localStorage.getItem('orders')? setOrders(JSON.parse(localStorage.getItem('orders'))):setOrders([])
  }
  
  console.log("app:",orders)
  return (
    <div className="mainBackGround">
      
      
      <div className="appBody">

      <Home />
      <hr/>

      <Menu orders={orders} setOrders={setOrders}/>
      <Reviews/>
      <Nav orders={orders} setOrders={setOrders}/>
      <img src={footer} className="footerImg"></img>
      </div>
      
    </div>
  );
};

export default App;
