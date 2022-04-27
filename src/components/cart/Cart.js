
export default function Cart(props) {
  const{quantity=0, handleServiceShow=Function.prototype}=props
  return (
    <div className="blue darken-3 text-light w-25" onClick={handleServiceShow}>
      <i className="material-icons d-inline">add_shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}
