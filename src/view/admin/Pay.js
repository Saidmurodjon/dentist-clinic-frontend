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
    address: PatientInfo.address,
    service: PatientInfo.service,
    type: PatientInfo.type,
    doctorName: PatientInfo.doctorName,
    tel: "",
    date: date.getDate(),
    signature: "",
  });
  const [show, setShow] = useState(false);
  const changeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  async function Add() {
    if (
      patient.name.length <= 0 ||
      patient.address.length <= 0 ||
      patient.lastName.length <= 0 ||
      patient.type.length <= 0
    ) {
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
        <h1>Bemor ma'lumotlari</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12">
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
                className="form-control-tel mt-5"
                type="tel"
                placeholder="tel"
                name="tel"
                value={patient.tel}
                onChange={changeHandler}
              />
            </form>
          </div>
          <div className="col-md-6 col-sm-12">
            <h1>Service Hizmatlar</h1>
            {PatientInfo.service.map((item, index) => {
              total += item.cost * item.quantity;
              return (
                <div key={index}>
                  <h3 className="">
                    <b>{index + 1}.</b> {item.name}{" "}
                    <span>
                      {item.cost}x{item.quantity}={item.cost * item.quantity}
                      so'm
                    </span>
                  </h3>
                </div>
              );
            })}
            <h3 className="mt-3">
              Jami summa:<b className={"text-danger"}> {total}</b> so'm
            </h3>
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

          <>
            <div className="col-md-8  justify-content-center w-100">
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
            <div className="col-md-12 justify-content-center">
            </div>
            <div>
              {show ? (
                  <button className={"btn btn-primary"} onClick={Add}>
                    Yuborish
                  </button>
              ) : null}
            </div>
          </>

        </div>
      </div>
    </>
  );
}

export default Pay;
