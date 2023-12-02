import React  from "react";
import classes from './MealsItem.module.css'
const MealsItem=(props)=>{
    const price=` $${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
        <div>
            <h2>{props.name}</h2>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div></div>
    </li>
  )
}
export default MealsItem;