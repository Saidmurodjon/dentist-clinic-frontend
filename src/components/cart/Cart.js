
export default function Cart(props) {
  const{quantity}=props
  return (
    <div className="blue darken-3 text-light">
      <i className="material-icons d-inline">add_shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}
