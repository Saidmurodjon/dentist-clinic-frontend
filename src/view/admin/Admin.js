import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import "../../components/servise-list/ServiceModal.css";
function Admin() {
  const date = new Date();
  const [service, setServise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    name: "",
    cost: "",
    date: date.getDate(),
  });
  const [ch, setCh] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((res) => {
        setServise(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  async function Send() {
    if (input.name.length > 0 && input.cost.length > 0) {
      axios
        .post("http://localhost:5000/service", input)
        .then((res) => alert("malumot qo'shildi"))
        .catch((error) => console.log(error));
    } else {
      alert("maydonni to'ldiring");
    }
  }
  //edit qilish uchun
  var serviceID = {};
  function Edit(e) {
    setShow(true);
    setCh(e);
  }

  // console.log(ch)
  //service delete
  async function Delete(e) {
    axios
      .delete(`http://localhost:5000/service/${e._id}`)
      .then((res) => alert("Hizmat o'chirildi"))
      .catch((error) => console.log(error));
  }
  async function Change() {
    await axios
      .put(`http://localhost:5000/service/${ch._id}`, input)
      .then((res) => {
        alert("Hizmat yangilandi");
        setShow(false);
        window.location.reload();
      })
      .catch((error) => console.log(error));

    console.log(input);
  }
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="row justify-content-center">
            {/*Service update qismi boshlandi*/}
            {show ? (
              <>
                <div className={"service-modal-list-style"}>
                  <div
                    className={"col-md-12 col-sm-12 service-modeal-list w-50"}
                  >
                    <ul className={"collection"}>
                      <li className={"collection-item active"}>
                        Service Update
                      </li>
                      <i
                        className={"material-icons service-modal-icon"}
                        onClick={(e) => setShow(false)}
                      >
                        {" "}
                        close
                      </i>
                    </ul>
                    <form
                      onSubmit={Submit}
                      className="globalBorder border-light p-4"
                    >
                      <input
                        className="form-control p-2"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={input.name}
                        onChange={changeHandler}
                      />

                      <input
                        className="form-control p-2"
                        type="text"
                        placeholder="Cost"
                        name="cost"
                        value={input.cost}
                        onChange={changeHandler}
                      />
                      <input
                        onClick={() => Change()}
                        value="Change"
                        type="submit"
                        className="btn btn-primary mt-3"
                      />
                    </form>
                  </div>
                </div>
              </>
            ) : null}
            {/*Service update qismi tugadi*/}

            <div className="col-md-6">
              <h2>Yangi hizmat qo'shish</h2>
              <div className="">
                <form onSubmit={Submit} className="globalBorder border-light">
                  <input
                    className="form-control mt-5"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={input.name}
                    onChange={changeHandler}
                  />

                  <input
                    className="form-control mt-5"
                    type="text"
                    placeholder="Cost"
                    name="cost"
                    value={input.cost}
                    onChange={changeHandler}
                  />
                  <input
                    onClick={() => Send()}
                    value="Add"
                    type="submit"
                    className="btn btn-primary mt-3"
                  />
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Hizmatlar</h2>
              {service.map((e) => {
                // console.log(e._id);
                return (
                  <div key={e._id} className={"text-black border-bottom"}>
                    <h4>
                      <b>Hizmat turi : </b>
                      {e.name}
                    </h4>
                    <h4>
                      <b>Narxi : </b>
                      {e.cost} so'm
                    </h4>

                    <button
                      className="btn m-2 btn-info"
                      onClick={() => Edit(e)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn m-2 btn-danger"
                      onClick={() => Delete(e)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
              {/* modall edite qilish uchun */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Admin;
