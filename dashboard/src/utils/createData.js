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

export const formatDate = (time) => {
  const [datePart, timePart] = time.split("T");
  const [year, month, day] = datePart.split("-");
  const [hour, minute, second] = timePart.split(":");
  const formattedDateTime = `${day}-${month}-${year} ${hour}:${minute}:${parseInt(
    second,
    10
  )}`;
  return formattedDateTime;
};
