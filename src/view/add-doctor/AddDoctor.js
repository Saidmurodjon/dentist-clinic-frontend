import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Loader from "../../components/loader/Loader";
import AddDoctorList from "../../components/add-doctor/AddDoctorList";
import AddDoctorInput from "./AddDoctorInput";
function AddDoctor(props) {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [AddShow, setAddShow] = useState(false);
  const [showDoctor, setShowDoctor] = useState(true);
  useEffect(() => {
    axios
      .get("https://dentist-back.herokuapp.com/doctors")
      .then((res) => {
        res.data && setDoctors(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const addShow = () => {
    setAddShow(!AddShow);
    setShowDoctor(!showDoctor);
  };

  return (
    <>
      <Navbar />
      <>
        <div className="cloud">
          {showDoctor ? (
            <a className="btn-floating btn-large pulse" onClick={addShow}>
              <i className="material-icons">person_add</i>
            </a>
          ) : (
            <a className="btn-floating btn-large pulse" onClick={addShow}>
              <i className="material-icons">people</i>
            </a>
          )}
        </div>
      </>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="row justify-content-center">
              <div className="col-md-6 justify-content-center">
                {AddShow ? (
                  <>
                    {" "}
                    <h1>Add doctor</h1>
                    <AddDoctorInput />
                  </>
                ) : null}
              </div>
              <div className="col-md-12 justify-content-center">
                {showDoctor ? <AddDoctorList doctors={doctors} /> : null}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AddDoctor;
