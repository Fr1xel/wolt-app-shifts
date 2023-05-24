import { fetchShifts, sortByDay } from "./shiftFetch";

export const sortByCity = async (setState) => {
  return new Promise(async (resolve) => {
    const allShifts = await fetchShifts();
    const arrOfCities = [];
    if (allShifts !== undefined) {
      allShifts?.forEach((shift) => {
        let doesCityExist = false;
        arrOfCities?.forEach((city) => {
          if (shift.city === city.cityName) {
            city.data.push(shift);
            doesCityExist = true;
          }
        });
        if (!doesCityExist) {
          arrOfCities.push({
            data: [shift],
            cityName: shift.city,
          });
        }
      });
      arrOfCities.forEach(city => {
        city.data = sortByDay(city.data)
      })
      resolve(setState(arrOfCities));
    }
  });
};
