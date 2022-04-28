import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddDoctorItem(props) {
  const navigate = useNavigate();
  const { _id, name, age, lastName, address, tel, login, password } = props;
  const doctor = props;
  // doctor delete
  const Delete = (_id) => {
    axios
      .delete(`https://dentist-back.herokuapp.com/doctors/${_id}`)
      .then((res) => {
        alert("doctor ma'lumotlari o'chirildi");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  const Update = (doctor) => {
    localStorage.setItem("dentist", JSON.stringify(doctor));
    navigate(`/add-doctor/${doctor._id}`);
  };
  return (
    <div className="col-md-4">
      <div className="card sticky-action z-depth-3" id={_id}>
        <ul className={"collection mt-0"}>
          <li className={"collection-item active"}>
            <b>Doctor ma'lumotlari </b>
          </li>
        </ul>
        <ul className="p-3">
          <li className={"p-2"}>
            <h4 className="d-inline">Ism:</h4>
            <ul className={"secondary-content"}>
              <h4 className={"text-success"}>
                <b>{name}</b>
              </h4>
            </ul>
          </li>
          <li className={"p-2"}>
            <h4 className="d-inline">Familiya:</h4>
            <ul className={"secondary-content"}>
              <h4 className={"text-success"}>
                <b>{lastName}</b>
              </h4>
            </ul>
          </li>
          <li className={"p-2"}>
            <h4 className="d-inline">Yoshi:</h4>
            <ul className={"secondary-content"}>
              <h4 className={"text-success"}>
                <b>{age}</b>
              </h4>
            </ul>
          </li>
          <li className={"p-2"}>
            <h4 className="d-inline">Manzil:</h4>
            <ul className={"secondary-content"}>
              <h4 className={"text-success"}>
                <b>{address}</b>
              </h4>
            </ul>
          </li>
          <li className={"p-2"}>
            <h4 className="d-inline">Tel:</h4>
            <ul className={"secondary-content"}>
              <h4 className={"text-success"}>
                <b>{tel}</b>
              </h4>
            </ul>
          </li>
          <li className={"p-2"}>
            <h4 className="d-inline">Login:</h4>
            <ul className={"secondary-content"}>
              <h4 className={"text-success"}>
                <b>{login}</b>
              </h4>
            </ul>
          </li>
          <li className={"p-2"}>
            <h4 className="d-inline">Password:</h4>
            <ul className={"secondary-content"}>
              <h4 className={"text-success"}>
                <b>{password}</b>
              </h4>
            </ul>
          </li>
        </ul>

        <button className="btn btn-success m-1" onClick={() => Update(doctor)}>
          <b>Update</b>
        </button>
        <button className="btn btn-danger m-1" onClick={() => Delete(_id)}>
          <b> Delete</b>
        </button>
      </div>
    </div>
  );
}

export default AddDoctorItem;
