import React from "react";
import PatientItem from "./PatientItem";

function PatientList(props) {
  const { filterPatient = [], Update } = props;
  if (!filterPatient.length) {
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
              <th className={"border text-center "}>Ismi</th>
              <th className={"border text-center "}>Familiyasi</th>
              <th className={"border text-center "}>Manzili</th>
            </tr>
          </thead>
          {filterPatient.reverse().map((item, index) => (
            <PatientItem
              key={item._id}
              {...item}
              Update={Update}
              index={index + 1}
            />
          ))}
        </table>
      </div>
    </div>
  );
}

export default PatientList;
