import { useContext } from 'react'
import Sound from "./Audio.js"



import '../css/menu.scss'

import song from '../GUMBO NR 5.mp3'
import Menu1 from '../imgs/Menus/1.jpg'
import Menu2 from '../imgs/Menus/2.jpg'
import Menu3 from '../imgs/Menus/3.jpg'
import Menu4 from '../imgs/Menus/4.jpg'
import Menu5 from '../imgs/Menus/5.jpg'
import Menu6 from '../imgs/Menus/6.jpg'
import Menu7 from '../imgs/Menus/7.jpg'
import Menu8 from '../imgs/Menus/8.jpg'
import Menu9 from '../imgs/Menus/9.jpg'


export function Menu(props) {
    const orders = props.orders
    const setOrders = props.setOrders

     
    const menuArray = [
        {
            frontTitle: "Three Bean Salad",
            img: Menu1,
            backTitle: "Three bean salad with tomatoes and tangy cajun dressing",
            price: 4.50,
            ingredients: "3 kinds of beans, tomatoes, spices",
            description: "Our tasty salad from chef Billy Giroux contains the best taste of 3 sorts of beans rounded by the fresh taste of tomatoes and crowned with a spiced cajun dressing."
        },
        {
            frontTitle: "Red Hot Chilli Gumbo",
            img: Menu2,
            backTitle: "Red Hot Chilli Gumbo – served with rice and nachos",
            price: 5.50,
            ingredients: "grounded beef, holy cajun trinity, tomatoes, chilis, spices",
            description: "A well-rounded Gumbo consisting of grounded beef in combination with the holy cajun trinity and sun-riped tomatoes spiced up with assorted chilis and spices."
        },
        {
            frontTitle: "General Gumbo",
            img: Menu3,
            backTitle: "General Gumbo – served with rice",
            price: 6.00,
            ingredients: "chicken breast, holy cajun trinity, tomatoes, spices",
            description: "Dive into the cajun cuisine with this medium-spiced Gumbo. The combination of chicken and spices will take you on a dream ride into the streets of New Orleans."
        }, {
            frontTitle: "Gumbo Jet",
            img: Menu4,
            backTitle: "Gumbo Jet – served with rice",
            price: 7.00,
            ingredients: "shrimps, smoked spicy-hot sausages, holy cajun trinity, tomatoes, spices, hot sauce",
            description: "Can you imagine a better combination than shrimps and smoked spicy-hot sausages? Neither we can!"
        }, {
            frontTitle: "Gumbo No. 5",
            img: Menu5,
            backTitle: "Gumbo No. 5 – served with rice",
            price: 8.50,
            ingredients: "crawfish, shrimps, oysters, smoked spicy-hot sausages, holy cajun trinity, okra, spices",
            description: "Feeling down today? Experience happiness with the one and only Gumbo No. 5."
        }, {
            frontTitle: "Jambalaya",
            img: Menu6,
            backTitle: "Jambalaya",
            price: 7.50,
            ingredients: "shrimps, chicken breast, smoked spicy-hot sausages, holy cajun trinity, tomatoes, rice, spices",
            description: "This perfect combination of shrimps, chicken, and smoked spicy-hot sausages leads to enlightenment about the cajun culture."
        }, {
            frontTitle: "Boiled Crawfish	",
            img: Menu7,
            backTitle: "Boiled Crawfish",
            price: 7.50,
            ingredients: "crawfish, holy cajun trinity, mushrooms, corn, potatoes, lemons, oranges, spices, hot sauce, mustard",
            description: "Do you want to taste the wow-effect? Eat our boiled crawfish with a ton of Zing!"
        }, {
            frontTitle: "Cajun Fried Chicken",
            img: Menu8,
            backTitle: "Cajun Fried Chicken",
            price:5.50,
            ingredients: "chicken, buttermilk, flour, hot sauce",
            description: "Forget about other fried chicken! The only fried chicken you need is our Cajun Fried Chicken!"
        }, {
            frontTitle: "Alligator",
            img: Menu9,
            backTitle: "Alligator",
            price:6.50,
            ingredients: "alligator, spices, secret sauce",
            description: "Feel the taste of Lousiana with our grilled alligator with the secret sauce created by Billy Giroux."
        },

    ]




    return <>
    
        <p className="MenuHeader">Menu / Order Now</p> 
        <Sound url={song}></Sound>
        <div className="menuWrapper">

            {menuArray.map((datenSatz) => {
                return <div class="card center">
                    <div class="front">
                        <div class="back-content center">

                            <img src={datenSatz.img}></img>
                            <div>{datenSatz.frontTitle}</div>
                        </div>
                    </div>

                    <div class="back">
                        <img src={datenSatz.img} alt=""></img>
                        <div className="menuTitle">{datenSatz.backTitle}</div>
                        <hr />
                        <div className="priceOrder" onClick={() => {
                            
                            setOrders([...orders,{title:datenSatz.frontTitle,price:datenSatz.price}])
                            localStorage.setItem('orders',JSON.stringify(orders))

                        }

                        }>
                            <div className="menuPrice">{datenSatz.price+"€"}</div>
                            <div>+<i class="fas fa-shopping-cart"></i></div>
                        </div>
                        <div className="menuIngredients">{datenSatz.ingredients}</div>
                        <hr />
                        <div className="menuDescription">{datenSatz.description}</div>
                    </div>
                </div>
            })}

        </div>
    </>

}


export default Menu