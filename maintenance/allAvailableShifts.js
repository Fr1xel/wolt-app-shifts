import { fetchShifts } from "./shiftFetch";

export const sortByCity = async (setState) => {
  return new Promise(async (resolve) => {
    const allShifts = await fetchShifts();
    const arrOfCities = [];
    if (allShifts !== undefined) {
      allShifts?.forEach((shift) => {
        let doesCityExist = false;
        arrOfCities?.forEach((city) => {
          if (shift.city === city.cityName) {
            city.shifts.push(shift);
            doesCityExist = true;
          }
        });
        if (!doesCityExist) {
          arrOfCities.push({
            shifts: [shift],
            cityName: shift.city,
          });
        }
      });
      resolve(setState(arrOfCities));
    }
  });
};
