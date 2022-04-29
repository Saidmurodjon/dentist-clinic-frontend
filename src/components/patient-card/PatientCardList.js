import React from "react";
import PatientCardItem from "./PatientCardItem";

function PatientCardList(props) {
  const { filP = [], Update } = props;
  if (!filP.length) {
    return <h3>Bemor ma'lumotlari mavjud emas!</h3>;
  }
  return (
    <div className={"row  justify-content-center"}>
      {/*{filP.reverse().map((item) => (*/}
      {/*  <PatientCardItem key={item._id} {...item} Update={Update} />*/}
      {/*))}*/}
<div className={"col-md-10"}>
  <table>
    <thead>
    <tr className={"border"}>
      <th className={"border text-center "}>#</th>

      <th className={"border text-center "}>Ism</th>
      <th className={"border text-center "}>Familiya</th>
      <th className={"border text-center "}>Doctor Ismi</th>
      <th className={"text-center"}>To'lov qilish</th>
    </tr>
    </thead>
    {filP.reverse().map((item,index) => (
        <PatientCardItem key={item._id} {...item} Update={Update} index={index+1} />
    ))}
  </table>

</div>
    </div>
  );
}

export default PatientCardList;
