import { useEffect, useState } from "react";
import api from "../api/api.js";
import JobInfo from "./JobInfo.js";
import Spinner from "./Spinner.js";

export default function Lookup() {
  const [url, setUrl] = useState("");
  const [pid, setPid] = useState("");
  const [jobDetails, setJobDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url != "") {
      const u = new URL(url);
      const params = new URLSearchParams(u.search);
      setPid(params.get("pid"));
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
    <>
      <input placeholder="url" onChange={(e) => setUrl(e.target.value)}></input>
      {loading ? (
        <Spinner />
      ) : jobDetails?.id == pid ? (
        <JobInfo data={jobDetails} />
      ) : (
        ""
      )}
    </>
  );
}
