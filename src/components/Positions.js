import { useEffect, useState } from "react";
import helpers from "../functions/helpers";
import External from "./External";

export default function Positions({ positions }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (positions.length > 0) {
      setKeys(Object.keys(positions[0]).filter((i) => !EXCLUDED.includes(i)));
    }
  }, [positions]);

  const EXCLUDED = [
    "job_description",
    "medallionProgram",
    "is_global",
    "locale",
    "stars",
    "hot",
    "locations",
    "ats_job_id",
    "display_job_id",
    "type",
    "id_locale",
    "location_flexibility",
  ];

  return positions.length == 0 ? (
    ""
  ) : (
    <div>
      <table>
        <thead>
          {keys.map((i) => {
            return <th>{i}</th>;
          })}
          <th>url</th>
        </thead>
        {positions.map((i) => {
          return (
            <tr>
              {Object.keys(i)
                .filter((i) => !EXCLUDED.includes(i))
                .map((k) => {
                  if (["t_create", "t_update"].includes(k)) {
                    return (
                      <td>{helpers.getDateTimeStringFromTimestamp(i[k])}</td>
                    );
                  } else {
                    return <td>{i[k]}</td>;
                  }
                })}
              <td>
                <a href={helpers.getJobLink(i.id)}>
                  <External />
                </a>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
