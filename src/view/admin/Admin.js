import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
function Admin() {
  const date = new Date();
  const [service, setServise] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({
    name: "",
    cost: "",
    date: date.getDate(),
  });
  console.log(input);
  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((res) => {
        setServise(res.data);
        setLoading(false)
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
  function Edit(e) {
    console.log(e);
  }
  //service delete
  async function Delete(e) {
    axios
      .delete(`http://localhost:5000/service/${e._id}`)
      .then((res) => alert("Hizmat o'chirildi"))
      .catch((error) => console.log(error));
  }

  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <h3>Admin page</h3>
        {loading ? (
          <Loader />
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h4>Yangi hizmat qo'shish</h4>
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
              <h4>Hizmatlar</h4>
              {service.map((e) => {
                console.log(e._id);
                return (
                  <div key={e._id}>
                    <h1>
                      {e.name} :{e.cost} so'm
                    </h1>

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
