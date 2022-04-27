import React from "react";

function PatientCardItem(props) {
  const {
    _id,
    name,
    lastName,
    tel,
    address,
    type,
    service,
    doctorName,
    age,
    Update,
  } = props;

  const patient = props;
  return (
    <div className={"col-md-4"}>
      <div className={"card sticky-action p-2 z-depth-3"}>
        <h3>
          <b>Ism:</b>
          {name}
        </h3>
        <h3>
          <b>Familiya:</b>
          {lastName}
        </h3>
        <h3>
          <b>Manzil:</b>
          {address}
        </h3>
        <h3>
          <b>Doktor:</b>
          {doctorName}
        </h3>
        <button
          className={"btn btn-primary text-body"}
          onClick={() => Update(patient)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default PatientCardItem;
