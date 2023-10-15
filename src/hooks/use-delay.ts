import { Duration } from "@/domain/duration";
import { endOfDay } from "date-fns";
import { useEffect, useState } from "react";

const endOfPromotion = endOfDay(new Date("2023-10-31"));

const secondsBeforeEndOfPromotion = () => {
  const now = new Date();
  const diff = endOfPromotion.getTime() - now.getTime();
  return Math.floor(diff / 1000);
};

export const useDelay = () => {
  const [seconds, setSeconds] = useState(secondsBeforeEndOfPromotion());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(secondsBeforeEndOfPromotion());
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return new Duration(seconds).toString();
};
