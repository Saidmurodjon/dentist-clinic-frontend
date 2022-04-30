import React, {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";

function SendSms(props) {
    const[sms,setSMS]=useState({
        SmsText:"",
        SmsTo:""
    })
    const changeHandler = (e) => {
        setSMS({ ...sms, [e.target.name]: e.target.value });
    };
    return (
      <>
          <Navbar/>
          <div className={'container'}>
              <h2 className={'text-center'}>SMS habar yuborish</h2>
              <div className="row justify-content-center">
                  <form className="col-md-6 s12">

                          <div className="input-field col s12">
                              <textarea
                                  id="textarea1"
                                  name={'SmsText'}
                                  className="materialize-textarea"
                                  value={sms.SmsText}
                                  onChange={changeHandler}
                              ></textarea>
                              <label htmlFor="textarea1">Habar matnini kiriting !</label>
                          </div>
                      <label>
                          <input
                              name="SmsTo"
                              type="radio"
                              className="form-check-input m-5"
                              value="female"
                              onChange={changeHandler}
                          />
                          <span>Ayollarga</span>
                      </label>
                      <label>
                          <input
                              name="SmsTo"
                              type="radio"
                              className="form-check-input m-5"
                              value="male"
                              onChange={changeHandler}
                          />
                          <span>Erkaklarga</span>
                      </label>
                      <label>
                          <input
                              name="SmsTo"
                              type="radio"
                              className="form-check-input m-5"
                              value="all"
                              onChange={changeHandler}
                          />
                          <span>Barchaga</span>
                      </label>
                  </form>
              </div>
          </div>
      </>
    );
}

export default SendSms;