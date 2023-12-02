import React, {Fragment} from "react";
import MealsImage from '../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
 return <Fragment>
    <header className={classes.header}>
        <h2>ReactMeals</h2>
        
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={MealsImage} alt="A tabel is full of declcious food"></img>
    </div>
 </Fragment>
}
export default Header;