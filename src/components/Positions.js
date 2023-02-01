import { useEffect, useState } from "react";

export default function Positions({ positions }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (positions.length > 0) {
      setKeys(Object.keys(positions[0]).filter((i) => !EXCLUDED.includes(i)));
    }
  }, [positions]);

  const EXCLUDED = ["job_description", "medallionProgram", "is_global"];

  return positions.length == 0 ? (
    ""
  ) : (
    <div>
      <table>
        <thead>
          {keys.map((i) => {
            return <th>{i}</th>;
          })}
        </thead>
        {positions.map((i) => {
          return (
            <tr>
              {Object.keys(i)
                .filter((i) => !EXCLUDED.includes(i))
                .map((k) => {
                  if (["t_create", "t_update"].includes(k)) {
                    const date = new Date(i[k] * 1000);
                    return (
                      <td>
                        {date.toLocaleDateString() +
                          " " +
                          date.toLocaleTimeString()}
                      </td>
                    );
                  } else {
                    return <td>{i[k]}</td>;
                  }
                })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
