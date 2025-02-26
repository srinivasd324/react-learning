import { useContext } from "react";
import Model from "./UI/Model";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext'

export default function Checkout(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalItemPrice, item) => {
        return totalItemPrice + item.quantity * item.price;
      }, 0);
    
    function handleClose(){
        userProgressCtx.hideCheckOut();
    }

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());
        fetch('http://localhost:3000/orders',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                order:{
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        });

    }
    
    
    return (
        <Model open={userProgressCtx.progress ==='checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount:- {currencyFormatter.format(cartTotal)}</p>
                <Input id="name" label="Full Name" type="text"/>
                <Input id="email" label="Email Address" type="email"/>
                <Input id="street" label="Street" type="text"/>
                <div className="control-row">
                    <Input label="Postal Code" id="postal-code" type="text"/>
                    <Input label="City" id="city" type="text"/>
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleClose}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Model>
    )
}