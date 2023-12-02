import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart=()=>{
    const cartItems= <ul  className={classes['cart-items']}>{[{id:'c1',name:'sushi',amount:1,price:12.99},
].map(item=><li>{item.name}</li>)}</ul>
    return <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>35.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
}
 export default Cart;