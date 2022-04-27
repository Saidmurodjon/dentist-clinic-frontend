import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { ServicesList } from "./ServicesList";

function Shop(props) {
  const [service, setService] = useState([]);
   const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://dentist-back.herokuapp.com/service")
      // .then((res)=>res.json())
      .then((res) => {
        res.data && setService(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return <div>
    {
      loading?<Loader/>:<ServicesList service={service}/>
    }
  </div>;
}

export { Shop};
