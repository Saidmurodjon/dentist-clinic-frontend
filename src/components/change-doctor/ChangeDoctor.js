import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
function ChangeDoctor(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("dentist"));
  const [doctor, setDoctor] = useState({
    name: user.name,
    lastName: user.lastName,
    address: user.address,
    age: user.age,
    tel: user.tel,
    login: user.login,
    password: user.password,
  });
  const changeHandler = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  //Yangi kelgan doctor ma'lumotlarini qo'shish
  async function Add() {
    if (
      doctor.name.length <= 0 ||
      doctor.age.length <= 0 ||
      doctor.address.length <= 0 ||
      doctor.lastName.length <= 0
    ) {
      alert("ma'lumotlar to'liq kiritilmagan?");
      // return true;
    } else {
      await axios
        .put(`https://dentist-back.herokuapp.com/doctors/${user._id}`, doctor)
        .then((res) => {
          alert("Doctor ma'lumotlari yangilandi.");
          navigate(`/add-doctor`);
        })
        .catch((error) => console.log(error));
    }
  }
  const Back=()=>{
    navigate(`/add-doctor`);
  }
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <h2>
              <b>Doctor ma'lumotlarini yangilash</b>
            </h2>
            <form onSubmit={Submit} className="globalBorder border-light">
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Name"
                name="name"
                value={doctor.name}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={doctor.lastName}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Address"
                name="address"
                value={doctor.address}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="number"
                placeholder="Age"
                name="age"
                value={doctor.age}
                min="0"
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Tel"
                name="tel"
                value={doctor.tel}
                min="12"
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Login"
                name="login"
                value={doctor.login}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Password"
                name="password"
                value={doctor.password}
                min="8"
                onChange={changeHandler}
              />
            </form>
            <button className="btn btn-info m-2" onClick={() => Back()}>
              <b>Ortga qaytish</b> <i className="material-icons left">undo</i>
            </button>
            <button className="btn btn-danger m-2" onClick={() => Add()}>
              {/* <i class="material-icons left">cloud_upload </i> */}
              <b>Yangilash</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangeDoctor;
