import helpers from "../functions/helpers.js";

export default function JobInfo({ data }) {
  return (
    <>
      <h3>{data.name}</h3>
      <p>Creación: {helpers.getDateTimeStringFromTimestamp(data.t_create)}</p>
      <p>
        Última actualización:{" "}
        {helpers.getDateTimeStringFromTimestamp(data.t_update)}
      </p>
      <a href={helpers.getJobLink(data.id)} target="_blank">
        apply
      </a>
    </>
  );
}
