import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
export default function Header(){
    const cartCtx =  useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totatCartItems  = cartCtx.items.reduce((totalItems, item) => {
        return totalItems + item.quantity;
    }, 0);
    function showCart(){
        userProgressCtx.showCart();
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Order Food"/> 
                <h1>Order Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={showCart}> Cart ({totatCartItems})</Button>
            </nav>
        </header>
    )
}