import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HistoryList from "../../components/history/HistoryList";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import { confirm } from "react-confirm-box";
function Calc() {
  var total = 0;
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterHistory, setFilterHistory] = useState([]);
  const id = useParams();
  const pay = {
    doctorPay: true,
  };

  const [History, setHistory] = useState([]);
  useEffect(() => {
    axios
      .get("https://dentist-back.herokuapp.com/patient")
      .then((res) => {
        setPatient(res.data);
        setLoading(false);
        // foo()
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://dentist-back.herokuapp.com/history")
      .then((res) => {
        setHistory(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const newPatient = patient.filter(
      (item) => item.doctorID === id.id && item.doctorPay === false
    );
    setFilter(newPatient);
  }, [patient]);
  useEffect(() => {
    const newHistory = History.filter((item) => item.doctorID === id.id);
    setFilterHistory(newHistory);
  }, [History]);

  const onClick = async () => {
    const result = await confirm("Siz to'lov qilmoqchimisiz?");
    if (result) {
      Pay();
      return;
    }
    alert("To'lov bekor qilindi");
  };
  const Pay = async () => {
    if (filter.length > 0) {
      const request = await axios.post(
        `https://dentist-back.herokuapp.com/history`,
        {
          name: filter[0].doctorName,
          doctorID: filter[0].doctorID,
          total: total,
          date: new Date(),
          value: filter.length,
        }
      );
      filter.map(async (e) => {
        await axios.put(
          `https://dentist-back.herokuapp.com/patient/${e._id}`,
          pay
        );
        window.location.reload();
      });

      console.log(request);
    } else {
      alert("Qiymat mavjud emas");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="row">
              <div className="col-md-12">
                <table>
                  <thead>
                    <tr className={"border"}>
                      <th className={"border text-center "}>#</th>

                      <th className={"border text-center "}>Ism</th>
                      <th className={"border text-center "}>Familya</th>
                      <th className={"border text-center "}>Sana</th>
                      <th className={"text-center"}>Qiymati</th>
                    </tr>
                  </thead>
                  {filter.map((item, index) => {
                    total += item.total;
                    return (
                      <tbody key={item._id}>
                        <tr className={"border "}>
                          <td className={"border text-center "}>{index + 1}</td>
                          <td className={"border text-center "}>{item.name}</td>
                          <td className={"border text-center "}>
                            {item.lastName}8
                          </td>
                          <td className={"border text-center "}>
                            {new Date(item.date).toDateString()}
                          </td>

                          <td className={"border text-center"}>{item.total}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <h4 className="m-3">
                  Umumiy summa <b className="text-danger">{total}</b> so'm
                </h4>
                <button
                  className="btn btn-success float-end"
                  onClick={() => onClick()}
                >
                  To'lash
                </button>
              </div>
            </div>
          </>
        )}
        <HistoryList filterHistory={filterHistory} />
      </div>
    </>
  );
}

export default Calc;
