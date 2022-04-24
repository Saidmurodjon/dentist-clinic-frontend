import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Doctor.css";

function Doctor() {
  const date = new Date();
  const [theArray, setTheArray] = useState([]);

  const [patient, setPatient] = useState({
    name: "",
    lastName: "",
    address: "",
    age: "",
    service: theArray,
    type: "",
    doctorName: "",
    date: date.getDate(),
  });
  const [service, setServise] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((res) => setServise(res.data))
      .catch((error) => console.log(error));
  }, []);
  const changeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  async function Add() {
    console.log(patient);
  }
  function AddService(e) {
    setTheArray((oldArray) => [...oldArray, e]);
    setPatient((prev) => {
      return {
        ...prev,
        service: theArray,
      };
    });
  }
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1>Bemor qo'shish</h1>
            <form onSubmit={Submit} className="globalBorder border-light">
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Name"
                name="name"
                value={patient.name}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={patient.lastName}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Address"
                name="address"
                value={patient.address}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Age"
                name="age"
                value={patient.age}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Type"
                name="type"
                value={patient.type}
                onChange={changeHandler}
              />
              <br />
              <div className="border service">
                {service.map((e) => {
                  return (
                    <div
                      className="p-1 border-bottom"
                      onClick={() => AddService(e)}
                      key={e._id}
                    >
                      <p>{e.name}</p>
                    </div>
                  );
                })}
              </div>
              <input
                onClick={() => Add()}
                value="Add"
                type="submit"
                className="btn btn-primary mt-3"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Doctor;
