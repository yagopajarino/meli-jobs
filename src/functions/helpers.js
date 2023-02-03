const getDateTimeStringFromTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

const getJobLink = (pid) => {
  return `https://mercadolibre.eightfold.ai/careers?pid=${pid}`;
};

const helpers = {
  getDateTimeStringFromTimestamp,
  getJobLink,
};

export default helpers;
