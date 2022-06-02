import React from "react";
import AddDoctorItem from "./AddDoctorItem";
function AddDoctorList(props) {
  const { doctors = [] } = props;
  if (!doctors.length) {
    return <h3>Doctor ma'lumotlari mavjud emas</h3>;
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
              <th className={"text-center border"}>Telefon</th>
              <th className={"border text-center "}>Login</th>
              <th className={"text-center border"}>Parol</th>
              <th className={"text-center border"}>Yangilash</th>
              <th className={"text-center border"}>O'chirish</th>
              <th className={"text-center border"}>Hissoblash</th>
            </tr>
          </thead>

          {doctors.map((item, index) => (
            <AddDoctorItem key={item._id} {...item} index={index} />
          ))}
        </table>
      </div>
    </div>
    // <div className="row">
    //   {doctors.map((item) => (
    //     <AddDoctorItem key={item._id} {...item} />
    //   ))}
    // </div>
  );
}

export default AddDoctorList;
