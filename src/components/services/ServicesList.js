import React from "react";
import { ServiceItem } from "./ServiceItem";
function ServicesList(props) {
  const { service = [], AddBasket } = props;
  if (!service.length) {
    return <h3>Service hizmatlari mavjud emas</h3>;
  }
  return (
    <div className="">
      {service.map((item) => (
        <ServiceItem key={item._id} {...item} AddBasket={AddBasket} />
      ))}
    </div>
  );
}

export { ServicesList };
