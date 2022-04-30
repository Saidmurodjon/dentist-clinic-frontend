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
              <Link to="/add-doctor" className="link text-white">
                Doktorlar
              </Link>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link to="/payment" className="link text-white">
                To'lov
              </Link>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link to="/sendSMS" className="link text-white">
                Habar yuborish
              </Link>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link to="/admin" className="link text-white">
                Hizmatlar
              </Link>
            </ul>

            {show ? (
              <div className="meny" onClick={(e) => setShow(!show)}>
                <div className="meny-into">
                  <div className="collection">
                    <Link className="text-dark link" to="/payment">
                      <ul className="collection-item border ">Home</ul>
                    </Link>
                    <Link className="text-dark link" to="/payment">
                      <ul className="collection-item border-bottom">Payment</ul>
                    </Link>
                    <Link className="text-dark link" to="/add-doctor">
                      <ul className="collection-item border-bottom ">
                        Doctors
                      </ul>
                    </Link>
                    <Link className="text-dark link" to="/sendSMS">
                      <ul className="collection-item  border-bottom">
                        Habar yuborish
                      </ul>
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
