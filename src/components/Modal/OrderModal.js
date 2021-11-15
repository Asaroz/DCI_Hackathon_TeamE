import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import chef from '../../imgs/Chef.jpg';
import '../../css/orderModal.scss'
import {setState, useState} from 'react'


export default function ChefModal(props) {
    const [toggle,setToggle]= useState(0)
    let sum = 0
    const orders = props.orders
    const setOrders = props.setOrders
    console.log(orders)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="ChefContainer"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Orders!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ordersBody">
                {orders.map((order,id)=>{

                    sum =sum + parseFloat(order.price.toFixed(2))
                    return <div className={"orderRow row"+id}>
                        <div>{order.title}</div>
                        <div>{order.price + "€"}</div>
                        <div><i class="far fa-trash-alt" onClick={()=>{
                            let newArray = orders
                            newArray.splice(id,1)
                            setOrders(newArray)
                            setToggle(toggle - parseFloat(order.price.toFixed(2)))
                            console.log("______"+toggle)
                            localStorage.setItem('orders',JSON.stringify(newArray))
                        }}></i></div>
                    </div>
                    
                })}

                <hr></hr>
                <div className="totalSum">
                    Total: <p>{sum}€ </p>   
                </div>
                
          </div>
        </Modal.Body>
        <Modal.Footer>
        <div className="buttonHolder">
          <Button onClick={()=>alert("Thank you for your Order. It will be processed.")} className="btn btn-danger btn-success">ORDER NOW</Button>
          <Button onClick={()=>{
              setOrders([])
              localStorage.setItem('orders',JSON.stringify([]))
          }} className="btn btn-danger pull-center">DELETE ALL</Button>
          <Button onClick={props.onHide} className="btn btn-danger pull-right">CLOSE</Button>
        </div>
        </Modal.Footer>
      </Modal>
    );
  }