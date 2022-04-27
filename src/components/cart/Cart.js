import "./Cart.css";
export default function Cart(props) {
  const { quantity = 0, handleServiceShow = Function.prototype } = props;
  return (
    <div className="cloud" onClick={handleServiceShow}>
      <a className="btn-floating btn-large pulse" onClick={handleServiceShow}>
        {quantity ? (
          <span>
            <b>{quantity}</b>
          </span>
        ) : (
          <i className="material-icons">cloud</i>
        )}
      </a>
    </div>
  );
}
