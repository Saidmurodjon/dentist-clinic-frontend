import axios from "axios";
import React, { useEffect, useState } from "react";
function Payment() {
  const [patient, setPatient] = useState([]);
  // console.log(patient);
  useEffect(() => {
    axios
      .get("http://localhost:5000/patient")

      .then((res) => setPatient(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Payment;
