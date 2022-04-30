import React from "react";
import AddDoctorItem from "./AddDoctorItem";
function AddDoctorList(props) {
  const { doctors = [] } = props;
  if (!doctors.length) {
    return <h3>Doctor ma'lumotlari mavjud emas</h3>;
  }
  return (
    <div className="row">
      {doctors.map((item) => (
        <AddDoctorItem key={item._id} {...item} />
      ))}
    </div>
  );
}

export default AddDoctorList;
