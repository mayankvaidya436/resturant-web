import React ,{useContext} from "react";
import classes from './MealsItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-context";
const MealsItem=(props)=>{
  const cartCtx=useContext(CartContext)
    const price=` $${props.price.toFixed(2)}`
    const addToCartHandler=amount=>{
    cartCtx.addItem({
      id:props.id,
      name :props.name,
      amount:amount,
      price:props.price
    });
    }
      return (
    <li className={classes.meal}>
        <div>
            <h2>{props.name}</h2>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
  )
}
export default MealsItem;