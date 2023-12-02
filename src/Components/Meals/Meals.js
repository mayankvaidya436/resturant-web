import React,{Fragment} from "react";
import MealSummary from "./MealSummary";
import AvaliableMeal from "./AvaliableMeal";
const Meals=()=>{
    return <Fragment>
         <MealSummary/>
         <AvaliableMeal/>
    </Fragment>
}
export default Meals;