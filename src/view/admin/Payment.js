import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
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
  const Delete = async (elem) => {
    await axios
      .delete(`http://localhost:5000/patient/${elem._id}`)
      .then((res) => alert("Bemor ma'lumotlari o'chirildi"))
      .catch((error) => console.log(error));
    window.location.reload();
  };
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
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {patient.map((elem) => {
              return (
                <div
                  className="col-md-3 justify-content-center border border-primary m-3"
                  key={elem._id}
                >
                  <h3 className="text overflow-hidden">
                    {elem.name} {elem.className}
                  </h3>

                  <button
                    className="btn btn-danger"
                    onClick={() => Delete(elem)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => Update(elem)}
                  >
                    Update
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Payment;
