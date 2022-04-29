import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className={""}>
        <div className="nav-wrapper">
          <div className={"container"}>
            <span
              className="large material-icons "
              onClick={(e) => setShow(!show)}
            >
              healing
            </span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link to="/payment" className="link text-white">
                Payment
              </Link>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link to="/add-doctor" className="link text-white">
                Doctors
              </Link>
            </ul>

            {show ? (
              <div className="meny" onClick={(e) => setShow(!show)}>
                <div className="meny-into">
                  <div className="collection">
                    <Link className="text-dark link" to="/payment">
                      <ul className="collection-item ">Home</ul>
                    </Link>
                    <Link className="text-dark link" to="/payment">
                      <ul className="collection-item text-dark">Payment</ul>
                    </Link>
                    <Link className="text-dark link" to="/add-doctor">
                      <ul className="collection-item ">Doctors</ul>
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
