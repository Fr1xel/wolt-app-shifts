export const calculateDateMatching = (shiftStart, shiftEnd) => {
  const myDate = new Date().getTime();
  const currentlyInShift = myDate - shiftStart > 0 && myDate - shiftEnd < 0;
  return currentlyInShift;
};

export const updateState = (state, setState, item) => {
  const unBook = state.map((day) => {
    return {
      ...day,
      dailyShifts: day.shifts.map((shift) => {
        if (shift.id === item.id) {
          shift.booked = false;
          return shift;
        } else return shift;
      }),
    };
  });
  const allBookedShifts = unBook.filter((day) => {
    day.shifts = day.shifts.filter((shift) => {
      if (shift.booked) return shift;
    });
    if (day.shifts.length > 0) return day;
  });
  setState(allBookedShifts);
};
