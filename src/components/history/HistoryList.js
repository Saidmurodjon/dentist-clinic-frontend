import React from "react";
import HistoryItem from "./HistoryItem";

function HistoryList(props) {
  const { filterHistory = [] } = props;
  if (!filterHistory.length) {
    return <h3>To'lov ma'lumotlari mavjud emas</h3>;
  }
  return (
    <div className={"row  justify-content-center"}>
      {/*{filP.reverse().map((item) => (*/}
      {/*  <PatientCardItem key={item._id} {...item} Update={Update} />*/}
      {/*))}*/}
      <div className={"col-md-10"}>
        <table>
          <thead>
            <tr className={"border"}>
              <th className={"border text-center"}>#</th>
              <th className={"border text-center"}>Vaqt</th>
              <th className={"border text-center"}>Hizmat soni</th>
              <th className={"border text-center"}>Qiymati</th>
            </tr>
          </thead>
          {filterHistory.reverse().map((item, index) => (
            <HistoryItem key={item._id} {...item} index={index + 1} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default HistoryList;
