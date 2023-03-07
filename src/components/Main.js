import { useEffect, useState } from "react";
import Filters from "./Filters.js";
import Positions from "./Positions.js";
import api from "../api/api.js";
import Spinner from "./Spinner.js";
import Lookup from "./Lookup.js";

export default function Main() {
  const [positions, setPositions] = useState([]);
  const [tableBottom, setTableBottom] = useState(0);
  const [yscroll, setYScroll] = useState(0);
  const [location, setLocation] = useState("");
  const [departament, setDepartament] = useState("");
  const [seniority, setSeniority] = useState("");
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);

  const buscarPosiciones = (location, departament, seniority, start = 0) => {
    api.getJobs(location, departament, seniority, start).then((r) => {
      if (start == 0) {
        setPositions(r);
      } else {
        setPositions([...positions, ...r]);
      }
    });
  };

  useEffect(() => {
    setStart(0);
  }, [location, departament, seniority]);

  useEffect(() => {
    document.addEventListener("scroll", () =>
      setYScroll(window.innerHeight + window.scrollY)
    );
  }, []);

  useEffect(() => {
    if (start == 0) {
      setPositions([]);
    }
    setLoading(true);
    buscarPosiciones(location, departament, seniority, start);
  }, [location, departament, seniority, start]);

  useEffect(() => {
    const table = document.querySelector("table");
    if (table) {
      const lims = document.querySelector("table").getBoundingClientRect();
      setTableBottom(lims.bottom + window.scrollY);
    }
    setLoading(false);
  }, [positions]);

  useEffect(() => {
    if (yscroll >= tableBottom && !loading && positions.length == start + 10) {
      setStart(start + 10);
    }
  }, [yscroll]);

  return (
    <main className="flex flex-col items-center w-full">
      <Lookup />
      <div className="w-full px-5">
        <h2 className="text-3xl pb-5 font-medium">Posiciones 'abiertas' 👀</h2>
        <Filters
          setLocation={setLocation}
          setDepartament={setDepartament}
          setSeniority={setSeniority}
        />
        <Positions positions={positions} />
        {loading ? <Spinner /> : ""}
      </div>
    </main>
  );
}
