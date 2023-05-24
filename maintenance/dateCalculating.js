import { shiftsData } from "./dataBase";

export const calculateDateMatching = (shiftStart, shiftEnd) => {
  const myDate = new Date().getTime();
  const currentlyInShift = myDate - shiftStart > 0 && myDate - shiftEnd < 0;
  return currentlyInShift;
};

export const calculateDailyShifts = (state, setState, item) => {
  const unBook = state.map((day) => {
    return {
      ...day,
      data: day.data.map((shift) => {
        if (shift.id === item.id) {
          shift.booked = false;
          return shift;
        } else return shift;
      }),
    };
  });
  const allBookedShifts = unBook.filter((day) => {
    day.data = day.data.filter((shift) => {
      if (shift.booked) return shift;
    });
    if (day.data.length > 0) return day;
  });
  updateDataBase(item.id);
  if (!setState) {
    return allBookedShifts;
  } else {
    setState(allBookedShifts);
  }
};

export const UpdateCityState = (state, setState, item) => {
  const filteredCityStates = state.filter((city) => {
    city.data = calculateDailyShifts(city.data,undefined, item);
    if(city.data.length > 0) return city
  });
  console.log("this is the old state", state, " and how the fuck did you get here", filteredCityStates)
  setState(filteredCityStates);
};

const updateDataBase = (id) => {
  shiftsData.forEach((shift) => {
    if (shift.id === id) {
      shift.booked = false;
    }
  });
};
