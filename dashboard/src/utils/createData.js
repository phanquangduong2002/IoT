import { format } from "date-fns-tz";

export const randomValue = () => {
  const value = Math.floor(Math.random() * 100);
  const temperatureValue = Math.floor(Math.random() * 100);
  const humidityValue = Math.floor(Math.random() * 100);
  const lightValue = Math.floor(Math.random() * 100);
  const currentDateTime = new Date();
  const vietnamTime = format(currentDateTime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", {
    timeZone: "Asia/Ho_Chi_Minh",
  });
  return { value, temperatureValue, humidityValue, lightValue, vietnamTime };
};

export const convertToCustomFormat = (isoDateTime) => {
  const date = new Date(isoDateTime);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  return `${day}-${month}-${year}\u00A0\u00A0\u00A0${hours}:${minutes}:${seconds}`;
};
