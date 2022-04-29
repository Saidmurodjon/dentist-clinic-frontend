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
      index
  } = props;

  const patient = props;
  return (
    // <div className={"col-md-4"}>
    //   <div className={"card sticky-action p-2 z-depth-3"}>
    //     <h3>
    //       <b>Ism:</b>
    //       {name}
    //     </h3>
    //     <h3>
    //       <b>Familiya:</b>
    //       {lastName}
    //     </h3>
    //     <h3>
    //       <b>Manzil:</b>
    //       {address}
    //     </h3>
    //     <h3>
    //       <b>Doktor:</b>
    //       {doctorName}
    //     </h3>
    //     <button
    //       className={"btn btn-primary text-body"}
    //       onClick={() => Update(patient)}
    //     >
    //       Update
    //     </button>
    //   </div>
    // </div>

      <tbody>
      <tr className={"border "}>
          <td className={"border text-center "}>{index}</td>
        <td className={"border text-center "}>{name}</td>
        <td className={"border text-center "}>{lastName}</td>
          <td className={"border text-center "}>{doctorName}</td>

          <td className={"text-center"}>    <button
              className={"btn btn-success m-0"}
              onClick={() => Update(patient)}
            >
              To'lov qilish
            </button></td>
      </tr>
      </tbody>
  );
}

export default PatientCardItem;
