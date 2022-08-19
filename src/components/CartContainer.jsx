import CartFormCli from "./CartFormCli"
import ItemCart from "./ItemCart"

const CartContainer = (cart) => {

    return(
        <>
        <CartFormCli />
        {/* {cart.length != '' ? cart.map(prod => <ItemCart key={prod.id} {...prod}/>)} */}
        {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}
        </>

    )
}

export default CartContainer