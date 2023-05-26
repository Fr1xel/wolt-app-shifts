import { shiftsData } from "./dataBase";

export const calculateDateMatching = (shiftStart, shiftEnd) => {
  const myDate = new Date().getTime();
  const currentlyInShift = myDate - shiftStart > 0 && myDate - shiftEnd < 0;
  return currentlyInShift;
};

export const calculateDailyShifts = (state, setState, item) => {
  const allBookedShifts = filterBookedShifts(changeBooking(state, item));
  updateDataBase(item.id);
  setState(allBookedShifts);
};

const changeBooking = (state, item) => {
  return state.map((day) => {
    return {
      ...day,
      data: day.data.map((shift) => {
        if (shift.id === item.id) {
          shift.booked = !shift.booked;
          return shift;
        } else return shift;
      }),
    };
  });
};

const filterBookedShifts = (state) => {
  return state.filter((day) => {
    day.data = day.data.filter((shift) => {
      if (shift.booked) return shift;
    });
    if (day.data.length > 0) return day;
  });
};

export const UpdateCityState = (state, setState, item) => {
  const filteredCityStates = state.filter((city) => {
    city.data = changeBooking(city.data, item);
    if (city.data.length > 0) return city;
  });
  updateDataBase(item.id);
  setState(filteredCityStates);
};

const updateDataBase = (id) => {
  shiftsData.forEach((shift) => {
    if (shift.id === id) {
      shift.booked = !shift.booked;
    }
  });
};
