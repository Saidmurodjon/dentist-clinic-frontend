
function ServiceItem(props) {
  const { _id, name, cost, AddBasket } = props;
  return (
    <div className="border " id={_id}>
      <h3 className=" d-inline w-75" >
        {name}:{cost}
      </h3>
      <span className="material-icons secondary-content" onClick={() => AddBasket({_id,name,cost})}>
        add_circle_outline
      </span>

    </div>
  );
}

export { ServiceItem };
