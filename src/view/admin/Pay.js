import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import Navbar from "../../components/navbar/Navbar";
function Pay() {
  const date = new Date();
  const PatientInfo = JSON.parse(localStorage.getItem("PayPatient"));
  const navigate = useNavigate();
  var total = 0;
  const [patient, setPatient] = useState({
    name: PatientInfo.name,
    lastName: PatientInfo.lastName,
    total: 0,
    tel: "",
    date: date,
    signature: "",
    doctorPay: false,
  });
  // console.log(patient);
  const [show, setShow] = useState(false);
  const changeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  async function Add() {
    if (patient.tel.length <= 0 || patient.signature.length <= 0) {
      alert("ma'lumotlar to'liq kiritilmagan?");
      return true;
    } else {
      await axios
        .put(
          `https://dentist-back.herokuapp.com/patient/${PatientInfo._id}`,
          patient
        )
        .then((res) => alert("bemor malumotlari yangilandi."))
        .catch((error) => console.log(error));
      navigate(`/payment`);
    }
  }
  // Imzo qoyish functions
  let sigPad = useRef({});
  const clear = () => {
    sigPad.current.clear();
  };
  const save = () => {
    setPatient((prev) => ({ ...prev, signature: sigPad.current.toDataURL() }));
    setPatient((prev) => ({ ...prev, total: total }));
    if (patient.tel.length > 12) {
      setShow(true);
    } else {
      alert("Telefon raqam kiriting");
    }
  };
  // console.log(patient)
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="row justify-content-center mt-3">
              <div className="col-md-4 col-sm-12 ">
                <h4 className="m-3">
                  <b>Ismi:</b> {PatientInfo.name}
                </h4>
              </div>
              <div className="col-md-4 col-sm-12">
                <h4 className="m-3">
                  <b>Familiyasi:</b> {PatientInfo.name}
                </h4>
              </div>
              <div className="col-md-4 col-sm-12">
                <form onSubmit={Submit} className="globalBorder border-light">
                  <input
                    className="form-control-tel"
                    type="tel"
                    placeholder="tel"
                    name="tel"
                    value={patient.tel}
                    onChange={changeHandler}
                  />
                </form>
              </div>
            </div>
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
            </p>
          </div>
          {/* Imzo qo'yish uchun */}

          <div className="col-md-6 col-sm-12  justify-content-center">
            <SignatureCanvas
              backgroundColor="rgb(240,230,140)"
              penColor="black"
              canvasProps={{ width: 700, height: 400 }}
              ref={sigPad}
            />
            <br />
            <button className="btn btn-info m-2" onClick={clear}>
              Tozalash
            </button>
            <button className="btn btn-danger m-2" onClick={save}>
              Saqlash
            </button>
          </div>
          <div className="col-md-12 col-sm-12">
            <h3 className="text-center text-success">Service Hizmatlar</h3>
            <table>
              <thead>
                <tr className={"border"}>
                  <th className={"border text-center "}>#</th>

                  <th className={"border text-center "}>Nomi</th>
                  <th className={"border text-center "}>Narxi</th>
                  <th className={"border text-center "}>Soni</th>
                  <th className={"text-center"}>Qiymati</th>
                </tr>
              </thead>
              {PatientInfo.service.map((item, index) => {
                total += item.cost * item.quantity;
                return (
                  <tbody key={item._id}>
                    <tr className={"border "}>
                      <td className={"border text-center "}>{index + 1}</td>
                      <td className={"border text-center "}>{item.name}</td>
                      <td className={"border text-center "}>{item.cost}</td>
                      <td className={"border text-center "}>{item.quantity}</td>

                      <td className={"border text-center"}>
                        {item.cost * item.quantity}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <h3 className="mt-3 float-end">
              Jami summa:<b className={"text-danger"}> {total}</b> so'm
            </h3>
          </div>

          <div className="col-md-12 justify-content-center"></div>
          <div>
            {show ? (
              <button className={"btn btn-primary float-end"} onClick={Add}>
                Yuborish
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay;
