import { useState } from 'react';
import OrderModal from '../components/Modal/OrderModal.js'
import { Link } from 'react-scroll'
import '../css/nav.scss';
import logo from '../imgs/logo_gumbo_mambo_-_logo_website_-_final.png'




export function Nav(props) {
    const menuArray = [{name:"HOME",class:"homeId"},{name:"ABOUT US",class:"aboutId"},{name:"MENU/ORDER",class:"menuId"},{name:"REVIEWS",class:"homeId"}]
    const orders = props.orders
    const setOrders = props.setOrders
    const [shoppingModalShow, setShoppingModalShow] = useState(false);
    return (
        <div className="navContainer">

            
            <nav className="nav">
                <div className="nav_section">
                    {menuArray.map((item) => {
                        return <div className="nav_item navButton">
                                <a href={"#"+item.class} className="button" >
                                    <span className="button_line button_line-top"></span>
                                    <span className="button_line button_line-right"></span>
                                    <span className="button_line button_line-bottom"></span>
                                    <span className="button_line button_line-left"></span>
                                    {item.name}
                                </a>

                        </div>
                    })}

                </div>

            </nav>

            <i className="fas fa-shopping-cart" onClick={() => {
                setShoppingModalShow(true)
            }}></i>
            <div className="shoppingAmount">{orders.length}</div>
            <img src={logo} alt="" className="navLogo" />

            <OrderModal
                show={shoppingModalShow}
                onHide={() => setShoppingModalShow(false)}
                orders={orders}
                setOrders={setOrders}
            />
        </div>
    );
};

export default Nav;