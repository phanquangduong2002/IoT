import { format } from "date-fns-tz";

export const randomValue = () => {
  const value = Math.floor(Math.random() * 100);
  const currentDateTime = new Date();
  const vietnamTime = format(currentDateTime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", {
    timeZone: "Asia/Ho_Chi_Minh",
  });

  return { value, vietnamTime };
};
