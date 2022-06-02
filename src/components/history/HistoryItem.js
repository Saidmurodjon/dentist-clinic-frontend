import React from "react";

function HistoryItem(props) {
  const { date, total, value, index } = props;
const data = new Date(date);
  return (
    <tbody>
      <tr className={"border"}>
        <td className={"border text-center "}>{index}</td>
        <td className={"border text-center "}>
          {/* {data.getDay()}
          /{data.getMonth()+1}/{data.getFullYear()} */}
          {data.toDateString()}
        </td>
        <td className={"border text-center "}>{value}</td>
        <td className={"border text-center "}>{total} so'm</td>
      </tr>
    </tbody>
  );
}

export default HistoryItem;
