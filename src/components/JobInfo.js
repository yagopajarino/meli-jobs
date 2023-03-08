import { useEffect, useState } from "react";
import helpers from "../functions/helpers.js";
import Popup from "./Popup.js";

export default function JobInfo({ data }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showed, setShowed] = useState(-1);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("cafecito"));
    if (item) {
      setShowed(item);
    } else {
      setShowed(false);
    }
  }, []);

  useEffect(() => {
    if (!showed) {
      setTimeout(() => {
        setShowPopUp(true);
        localStorage.setItem("cafecito", JSON.stringify(true));
      }, 5000);
    }
  }, [showed]);

  return (
    <div className="flex flex-row text-xl pt-12 pb-5 w-full justify-evenly items-center">
      <div className="flex flex-col">
        <h3 className="text-3xl font-medium pb-5">{data.name}</h3>
        <p className="pb-2">
          Creación: {helpers.getDateTimeStringFromTimestamp(data.t_create)}
        </p>
        <p>
          Última actualización:{" "}
          {helpers.getDateTimeStringFromTimestamp(data.t_update)}
        </p>
      </div>
      <a href={helpers.getJobLink(data.id)} target="_blank">
        <button>Aplicar</button>
      </a>
      {showPopUp ? <Popup setShowPopUp={setShowPopUp} /> : ""}
    </div>
  );
}
