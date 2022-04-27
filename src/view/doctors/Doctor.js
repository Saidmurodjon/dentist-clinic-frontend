import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import Loader from "../../components/loader/Loader";
import { ServicesList } from "../../components/services/ServicesList";
import { ServiceModalList } from "../../components/servise-list/ServiceModalList";
import "./Doctor.css";
const date = new Date();
function Doctor() {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [service, setService] = useState([]);
  const [showService, setShowService] = useState(false);
  const [patient, setPatient] = useState({
    name: "",
    lastName: "",
    address: "",
    age: "",
    service: order,
    type: "",
    doctorName: "",
    date: date.getDate(),
    tel: "+9989",
  });
  useEffect(()=>{
    setPatient({ ...patient, service: order })
  },[order])
  // console.log(patient);
  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((res) => {
        res.data && setService(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const changeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  //Yangi kelgan bemorni ma'lumotlarini qo'shish
  async function Add() {
    if (
      patient.name.length <= 0 ||
      patient.age.length <= 0 ||
      patient.address.length <= 0 ||
      patient.lastName.length <= 0
    ) {
      alert("ma'lumotlar to'liq kiritilmagan?");
      // return true;
    } else {
      await axios
        .post("http://localhost:5000/patient", patient)
        .then((res) => {
          alert("bemor malumotlari qo'shildi.");
          console.log(res);
        })
        .catch((error) => console.log(error));
      window.location.reload();
    }
  }
  const Submit = (e) => {
    e.preventDefault();
  };
  //servis ma'lumotlarini qo'shish
  const AddBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem._id === item._id
    );
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };
  //servisce hizmatlari sonini ko'paytirish
  const incQuantity=(itemID)=>{
    const newOrder=order.map(elem=>{
      if(elem._id===itemID){
        const newQuantity=elem.quantity+1
        return{
          ...elem,
          quantity: newQuantity
        }
      }else {
        return elem
      }
    })
    setOrder(newOrder)
  }
  //servisce hizmatlari sonini ko'paytirish
  const decQuantity=(itemID)=>{
    const newOrder=order.map(elem=>{
      if(elem._id===itemID){
        const newQuantity=elem.quantity-1
        return{
          ...elem,
          quantity: newQuantity >=0?newQuantity:0
        }
      }else {
        return elem
      }
    })
    setOrder(newOrder)
  }
  // Kiritilgan service hizmatlarini ko'rsatish
  const handleServiceShow = () => {
    setShowService(!showService);
    // console.log(showService)
  };
  //Service hizmatlarini delete qilish
  const removeServiceModal=(itemID)=>{
const newOrder=order.filter(item=>item._id!==itemID)
    setOrder(newOrder)
  }
  return (
    <>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-12">
              <Cart
                quantity={order.length}
                handleServiceShow={handleServiceShow}
              />
              {showService && (
                <ServiceModalList
                  order={order}
                  handleServiceShow={handleServiceShow}
                  removeServiceModal={removeServiceModal}
                  incQuantity={incQuantity}
                  decQuantity={decQuantity}
                />
              )}
            </div>
            <div className="col-md-6">
              <h1>Bemor qo'shish</h1>
              <form onSubmit={Submit} className="globalBorder border-light">
                <input
                  className="form-control mt-5"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={patient.name}
                  onChange={changeHandler}
                />
                <input
                  className="form-control mt-5"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={patient.lastName}
                  onChange={changeHandler}
                />
                <input
                  className="form-control mt-5"
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={patient.address}
                  onChange={changeHandler}
                />
                <input
                  className="form-control mt-5"
                  type="number"
                  placeholder="Age"
                  name="age"
                  value={patient.age}
                  min="0"
                  onChange={changeHandler}
                />
                <br />
                <label>
                  <input
                    name="type"
                    type="radio"
                    className="form-check-input m-5"
                    value="male"
                    onChange={changeHandler}
                  />
                  <span>Erkak</span>
                </label>

                <label>
                  <input
                    name="type"
                    type="radio"
                    className="form-check-input m-5"
                    value="female"
                    onChange={changeHandler}
                  />
                  <span>Ayol</span>
                </label>
                <br />
                <br />
                <br />
                <div className="border service">
                  <ServicesList service={service} AddBasket={AddBasket} />
                </div>
                <input
                  onClick={() => Add()}
                  value="Add"
                  type="submit"
                  className="btn btn-primary m-2"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Doctor;
