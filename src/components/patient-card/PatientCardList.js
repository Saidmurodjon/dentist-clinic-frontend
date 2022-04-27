import React from "react";
import PatientCardItem from "./PatientCardItem";

function PatientCardList(props) {
  const { patient = [], Update } = props;
  if (!patient.length) {
    return <h3>Bemor ma'lumotlari mavjud emas!</h3>;
  }
  return (
    <div className={"row "}>
      {patient.map((item) => (
        <PatientCardItem key={item._id} {...item} Update={Update} />
      ))}
    </div>
  );
}

export default PatientCardList;
