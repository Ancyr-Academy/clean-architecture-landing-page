import { endOfDay } from "date-fns";

const endOfPromotion = endOfDay(new Date("2023-12-25T00:00:00"));

export const secondsBeforeEndOfPromotion = () => {
  const now = new Date();
  const diff = endOfPromotion.getTime() - now.getTime();
  return Math.floor(diff / 1000);
};
