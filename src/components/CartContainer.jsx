import CartFormCli from "./CartFormCli";
import ItemCart from "./ItemCart";

const CartContainer = (cart) => {
  return (
    <>
      <CartFormCli />
      {cart.map((prod) => (
        <ItemCart key={prod.id} {...prod} />
      ))}
    </>
  );
};

export default CartContainer;
