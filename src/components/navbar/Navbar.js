import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav className={""}>
        <div className="nav-wrapper">
          <div className={"container"}>
            <span className="large material-icons ">
              <Link to="/admin">healing</Link>
            </span>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <Link to="/payment">Payment</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
