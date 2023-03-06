import { useEffect, useState } from "react";
import api from "../api/api.js";
import JobInfo from "./JobInfo.js";
import Spinner from "./Spinner.js";
import helpers from "../functions/helpers.js";

export default function Lookup() {
  const [url, setUrl] = useState("");
  const [pid, setPid] = useState("");
  const [jobDetails, setJobDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (url != "") {
      if (helpers.isValidUrl(url)) {
        const u = new URL(url);
        const params = new URLSearchParams(u.search);
        const pid = params.get("pid");
        if (pid == null) {
          setErrorMsg("Ingresar una URL valida");
        } else {
          setErrorMsg("");
          setPid(pid);
        }
      } else {
        setErrorMsg("Ingresar una URL válida");
      }
    }
  }, [url]);

  useEffect(() => {
    if (pid != "") {
      setLoading(true);
      api.getJobDetails(pid).then((r) => setJobDetails(r));
    }
  }, [pid]);

  useEffect(() => {
    setLoading(false);
    document.querySelector("input").value = "";
  }, [jobDetails]);

  return (
    <div className="flex flex-col py-8 px-5 w-full bg-slate-50 mb-5">
      <input
        className="w-full text-xl p-3 rounded-md focus-visible:outline-none border-2 border-gray-400 bg-slate-50"
        placeholder={url == "" ? "Url de la búsqueda" : url}
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <p>{errorMsg}</p>
      {loading ? (
        <Spinner />
      ) : jobDetails?.id == pid ? (
        <JobInfo data={jobDetails} />
      ) : (
        ""
      )}
    </div>
  );
}
