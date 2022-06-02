import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../index.css'
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
  const Calc=()=>{
    navigate(`/calc/${doctor._id}`);

  }
  return (
    <tbody>
      <tr className={"border "}>
        <td className={"border text-center "}>{"1"}</td>
        <td className={"border text-center "}>{name}</td>
        <td className={"border text-center "}>{lastName}</td>
        <td className={"border text-center "}>{address}</td>
        <td className={"border text-center "}>{tel}</td>
        <td className={"border text-center "}>{login}</td>
        <td className={"border text-center "}>{password}</td>
        <td className={"border text-center "}>
          <span
            className="material-icons text-secondary cursor"
            onClick={() => Update(doctor)}
          >
            edit
          </span>
        </td>
        <td className={"border text-center "}>
          <span
            className="material-icons text-danger cursor"
            onClick={() => Delete(_id)}
          >
            delete_forever
          </span>
        </td>
        <td className={"border text-center"}>
          <span
            className="material-icons text-success cursor"
            onClick={() => Calc(_id)}
          >
            calculate
          </span>
        </td>
      </tr>
    </tbody>
  );
}

export default AddDoctorItem;
