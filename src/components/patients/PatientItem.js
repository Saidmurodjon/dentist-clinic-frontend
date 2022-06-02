import React from "react";

function PatientItem(props) {
  const { name, lastName, address, index } = props;

  return (
    <tbody>
      <tr className={"border "}>
        <td className={"border text-center "}>{index}</td>
        <td className={"border text-center "}>{name}</td>
        <td className={"border text-center "}>{lastName}</td>
        <td className={"border text-center "}>{address}</td>
      </tr>
    </tbody>
  );
}

export default PatientItem;
