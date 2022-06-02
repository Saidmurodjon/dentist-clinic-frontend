import React from "react";

function PatientCardItem(props) {
  const { _id, name, lastName, doctorName, Update, index } = props;

  const patient = props;
  return (
    <tbody>
      <tr className={"border "}>
        <td className={"border text-center "}>{index}</td>
        <td className={"border text-center "}>{name}</td>
        <td className={"border text-center "}>{lastName}</td>
        <td className={"border text-center "}>{doctorName}</td>

        <td className={"text-center"}>
          <button
            className={"btn btn-success m-0"}
            onClick={() => Update(patient)}
          >
            To'lov qilish
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default PatientCardItem;
  