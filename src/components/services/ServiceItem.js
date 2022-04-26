function ServiceItem(props) {
  const { _id, name, cost, AddBasket } = props;
  return (
    <div className="border" id={_id}>
      <h3 className=" d-inline w-75" onClick={() => AddBasket({_id,name,cost})}>
        {name}:{cost}
      </h3>
      <span className="material-icons d-inline $danger">
        add_circle_outline
      </span>
    </div>
  );
}

export { ServiceItem };
