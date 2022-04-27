import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // const [admin, setAdmin] = useState(false);
  const [doctor, setDoctor] = useState([]);

  const [login, setLogin] = useState({
    login: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors")
      .then((res) => setDoctor(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(doctor);
  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const Check = async () => {
    if (login.login === "admin" && login.password === "admin") {
      navigate("/admin");
    } else if (login.login.length > 0 && login.password.length > 0) {
      for (let i = 0; i < doctor.length; i++) {
        if (doctor[i].login === login.login) {
          navigate("/doctor");
        }
      }
    } else {
      alert("maydonni to'g'ri to'ldiring");
    }

    // document.querySelector("#log").value = "";
    // document.querySelector("#pass").value = "";
  };

  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 mt-5">
          <form onSubmit={Submit} className="globalBorder border-light">
            <input
              className="form-control mt-5"
              type="text"
              placeholder="Login"
              name="login"
              value={login.login}
              onChange={changeHandler}
            />

            <input
              className="form-control mt-5"
              type="password"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={changeHandler}
            />
            <input
              onClick={() => Check()}
              value="Login"
              type="submit"
              className="btn btn-primary mt-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
