import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import PatientCardList from "../../components/patient-card/PatientCardList";
function Payment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState([]);
  // console.log(patient);
  useEffect(() => {
    axios
      .get("http://localhost:5000/patient")
      .then((res) => {
        setPatient(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  // const Delete = async (elem) => {
  //   await axios
  //     .delete(`http://localhost:5000/patient/${elem._id}`)
  //     .then((res) => alert("Bemor ma'lumotlari o'chirildi"))
  //     .catch((error) => console.log(error));
  //   window.location.reload();
  // };
  const Update = async (elem) => {
    localStorage.setItem("PayPatient", JSON.stringify(elem));
    navigate(`/pay/${elem._id}`);
    // await axios
    //   .put(`http://localhost:5000/patient/${elem._id}`)
    //   .then((res) => alert("Bemor ma'lumotlari o'chirildi"))
    //   .catch((error) => console.log(error));
    // window.location.reload();
  };
  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="">
            <PatientCardList patient={patient} Update={Update} />
          </div>
        )}
      </div>
    </>
  );
}

export default Payment;
