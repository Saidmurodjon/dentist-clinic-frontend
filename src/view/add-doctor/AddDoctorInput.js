import React, { useState } from "react";
import axios from "axios";
import "./../../components/servise-list/ServiceModal.css";
function AddDoctorInput(props) {
  const [doctor, setDoctor] = useState({
    name: "",
    lastName: "",
    address: "",
    age: "",
    type: "",
    tel: "+9989",
    login: "",
    password: "",
  });


  // const Update = (e) => {
  //   axios
  //     .put(`https://dentist-back.herokuapp.com/doctors/${e._id}`)
  //     .then((res) => {
  //       alert("doctor ma'lumotlari yangilandi");
  //     })
  //     .catch((error) => console.log(error));
  // };
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
        .post("https://dentist-back.herokuapp.com/doctors", doctor)
        .then((res) => {
          alert("Doctor ma'lumotlari qo'shildi.");
        })
        .catch((error) => console.log(error));
      window.location.reload();
    }
  }
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className=""></div>
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
        <br />
        <br />
        <label>
          <input
            name="type"
            type="radio"
            className="form-check-input m-5"
            value="male"
            onChange={changeHandler}
          />
          <span>Erkak</span>
        </label>

        <label>
          <input
            name="type"
            type="radio"
            className="form-check-input m-5"
            value="female"
            onChange={changeHandler}
          />
          <span>Ayol</span>
        </label>

        <br />
        <br />
        <br />
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

        <input
          onClick={() => Add()}
          value="Yuborish"
          type="submit"
          className="btn btn-primary m-2"
        />
      </form>
    </div>
  );
}

export default AddDoctorInput;
