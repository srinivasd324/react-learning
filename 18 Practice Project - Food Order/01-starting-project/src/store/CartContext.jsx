import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});

function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedItems  = [...state.items];
        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1

            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else{
            updatedItems.push({...action.item, quantity: 1});
        }
        return {
            ...state,
            items: updatedItems
        }
    } else if(action.type ==='REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];
        if(existingItem.quantity === 1){
            updatedItems.splice(existingCartItemIndex,1);
        } else{
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1
            } 
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            ...state,
            items: updatedItems
        }

    }
    if(action.type==="CLEAR_CART"){
        return {
            ...state, items:[] 
        }
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cartItem, disPatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item){
        disPatchCartAction({type: "ADD_ITEM", item});
    }

    function removeItem(id){
        disPatchCartAction({type: "REMOVE_ITEM", id});
    }

    function clearCart(){
        disPatchCartAction({type: "CLEAR_CART"});
    }

    const cartContext = {
        items: cartItem.items,
        addItem,
        removeItem,
        clearCart
    };
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
