import { endOfDay } from "date-fns";

export const getCourseURL = () =>
  "https://courses.ancyracademy.fr/p/clean-architecture-mega-bundle";

export const endOfPromotion = endOfDay(new Date("2023-12-25T00:00:00"));
