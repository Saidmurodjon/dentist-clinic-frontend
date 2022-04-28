import React from "react";
import PatientCardItem from "./PatientCardItem";

function PatientCardList(props) {
  const { filP = [], Update } = props;
  if (!filP.length) {
    return <h3>Bemor ma'lumotlari mavjud emas!</h3>;
  }
  return (
    <div className={"row "}>
      {filP.reverse().map((item) => (
        <PatientCardItem key={item._id} {...item} Update={Update} />
      ))}
    </div>
  );
}

export default PatientCardList;
