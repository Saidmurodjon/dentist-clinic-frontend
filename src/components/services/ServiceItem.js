import "./service.css";
function ServiceItem(props) {
  const { _id, name, cost, AddBasket } = props;
  return (
    <div className=" m-2  border-bottom p-2 " id={_id}>
      <h5 className=" d-inline mt-3">
        {name} narxi : {cost} so'm
      </h5>
      <span
        className="material-icons text-success secondary-content service-add-icion p-1"
        onClick={() => AddBasket({ _id, name, cost })}
      >
        add_circle_outline
      </span>
    </div>
  );
}

export { ServiceItem };
