import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
function Pay() {
  const date = new Date();
  const PatientInfo = JSON.parse(localStorage.getItem("PayPatient"));
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    name: PatientInfo.name,
    lastName: PatientInfo.lastName,
    address: PatientInfo.address,
    age: PatientInfo.age,
    service: PatientInfo.service,
    type: "+"+PatientInfo.type,
    doctorName: PatientInfo.doctorName,
    tel: "",
    date: date.getDate(),
  });
  console.log(patient);
  const changeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  async function Add() {
    if (
      patient.name.length <= 0 ||
      patient.age.length <= 0 ||
      patient.address.length <= 0 ||
      patient.lastName.length <= 0 ||
      patient.type.length <= 0
    ) {
      alert("ma'lumotlar to'liq kiritilmagan?");
      return true;
    } else {
      await axios
        .put(`http://localhost:5000/patient/${PatientInfo._id}`, patient)
        .then((res) => alert("bemor malumotlari yangilandi."))
        .catch((error) => console.log(error));
      navigate(`/payment`);
    }
  }
  // jami summa hisoblash
  // const [total, setTotal] = useState(0);
  // const total = PatientInfo.service
  //   .map((item) => item.cost)
  //   .reduce((prev, next) => prev + next);

  // Imzo qoyish functions
  let sigPad = useRef({});
  const [signature, setSignature] = useState("");
  const clear = () => {
    sigPad.current.clear();
    setSignature("");
  };
  const save = () => {
    setSignature(sigPad.current.toDataURL());
  };
  return (
    <>
      <div className="container">
        <h1>Bemor ma'lumotlari</h1>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={Submit} className="globalBorder border-light">
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Name"
                name="name"
                value={PatientInfo.name}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={PatientInfo.lastName}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Address"
                name="address"
                value={PatientInfo.address}
                onChange={changeHandler}
              />
              <input
                className="form-control mt-5"
                type="text"
                placeholder="Age"
                name="age"
                value={PatientInfo.age}
                onChange={changeHandler}
              />
              <input
                className="form-control-tel mt-5"
                type="tel"
                placeholder="tel"
                name="tel"
                value={patient.tel}
                onChange={changeHandler}
              />
              <input
                onClick={() => Add()}
                value="Add"
                type="submit"
                className="btn btn-primary m-2"
              />
            </form>
          </div>
          <div className="col-md-6">
            <h1>Service Hizmatlar</h1>
            {PatientInfo.service.map((item, index) => {
              return (
                <div key={index}>
                  <h3 className="d-inline">
                    {" "}
                    {index + 1}. {item.name}: {item.cost} so'm{" "}
                  </h3>
                </div>
              );
            })}
            <h3 className="tect text-danger mt-3">Jami summa: {} so'm</h3>
          </div>
          {/* Doctor haqida so'rovnoma */}
          <div className="col-md-12 col-sm-12">
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,
              nam?
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              vitae, dolores eaque corrupti maxime quidem dicta. Consectetur
              explicabo eaque labore dolorem nam ex eveniet cum! Eius accusamus
              sunt earum unde, placeat aperiam maiores dignissimos, corporis
              dolores enim impedit quisquam ea, aut provident dicta. Eum magni
              nobis ducimus deserunt! Est dignissimos ad animi quia, nobis, quae
              quam accusantium nisi autem, assumenda ipsa id officia adipisci
              totam voluptas ut similique libero fugiat. Accusantium quaerat
              dignissimos quis explicabo, quibusdam ut enim obcaecati dolore
              error cumque molestiae soluta excepturi sequi velit maxime ipsum
              corporis laudantium et magni, illum reiciendis quidem neque odio.
              Accusantium, nostrum!
            </p>
          </div>
          {/* Imzo qo'yish uchun */}

          <div className="col-md-8 justify-content-center">
            <SignatureCanvas
              backgroundColor="rgb(240,230,140)"
              penColor="black"
              canvasProps={{ width: 800, height: 600 }}
              ref={sigPad}
            />
            <button className="btn btn-info" onClick={clear}>
              Clear
            </button>
            <button className="btn btn-danger" onClick={save}>
              Save
            </button>
          </div>
          <div className="col-md-12 justify-content-center">
            <img
              src={signature}
              className="img-thumbnail w-25 mt-5"
              alt="signature"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay;
