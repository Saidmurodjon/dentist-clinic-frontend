import {
    Routes,
    Route
  } from "react-router-dom";
import Login from '../view/login/Login';
import Admin from '../view/admin/Admin'
import Doctor from "../view/doctors/Doctor";
import Payment from "../view/admin/Payment";
function Router(){
    
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </>
    );

}

export default Router