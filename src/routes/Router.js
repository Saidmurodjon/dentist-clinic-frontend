import { Route, Routes } from "react-router-dom";
import Admin from "../view/admin/Admin";
import Payment from "../view/admin/Payment";
import Doctor from "../view/doctors/Doctor";
import Login from "../view/login/Login";
import Pay from "../view/admin/Pay";
import AddDoctor from "../view/add-doctor/AddDoctor";
import ChangeDoctor from '../components/change-doctor/ChangeDoctor'
import SendSMS from "../view/send-sms/SendSMS";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pay/:id" element={<Pay />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/add-doctor/:id" element={<ChangeDoctor />} />
        <Route path='/sendSMS' element={<SendSMS/>}/>
      </Routes>
    </>
  );
}

export default Router;
