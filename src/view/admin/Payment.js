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
  const[filP,setFilP]=useState([])
  // console.log(patient);
  useEffect(() => {
     axios
       .get("https://dentist-back.herokuapp.com/patient")
       .then((res) => {
         setPatient(res.data);
         setLoading(false);
       })
       .catch((error) => console.log(error));
  }, []);
 useEffect(() => {
    const newOrder = patient.filter((item) => !item.signature);
    setFilP(newOrder);
 }, [patient]);
  

  // const Delete = async (elem) => {
  //   await axios
  //     .delete(`hhttps://dentist-back.herokuapp.com/patient/${elem._id}`)
  //     .then((res) => alert("Bemor ma'lumotlari o'chirildi"))
  //     .catch((error) => console.log(error));
  //   window.location.reload();
  // };
  const Update = async (elem) => {
    localStorage.setItem("PayPatient", JSON.stringify(elem));
    navigate(`/pay/${elem._id}`);
    // await axios
    //   .put(`hhttps://dentist-back.herokuapp.com/patient/${elem._id}`)
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
            <PatientCardList filP={filP} Update={Update} />
          </div>
        )}
      </div>
    </>
  );
}

export default Payment;
