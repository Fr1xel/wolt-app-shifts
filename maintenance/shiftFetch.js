export const bookedShifts = (setState) => {
  const allDates = createDateObject()
  const filteredShifts = allDates.filter(shift => {
      if(shift.booked) return shift
  })
  setState(sortByDay(filteredShifts));
}

const createDateObject = () => {
  const allDates = shiftsData.sort((p1, p2) => (p1.startTime > p2.startTime) ? 1 : (p1.startTime < p2.startTime) ? -1 : 0).map((shift) => {
    const date = new Date(shift.startTime);
    const endDate = new Date(shift.endTime);
    const shiftLength = (endDate - date) / (1000 * 60 * 60);
    return {
      date: date.toDateString(),
      startTime: timeConverter(date.getHours(), date.getMinutes()),
      dateNumber: date.getTime(),
      endTime: timeConverter(endDate.getHours(), endDate.getMinutes()),
      shiftLength: shiftLength,
      displayDate: date.toDateString().split(" ").slice(1).join(" "),
      city: shift.area,
      booked: shift.booked
    };
  });
  return allDates
}


export const fetchShifts = (setState) => {
  setTimeout(() => {
    const allDates = createDateObject()
    setState(sortByDay(allDates));
  }, 500);
};

const timeConverter = (hours, minutes) => {
  if (minutes === 0) return `${hours}:00`;
  if (minutes < 10) return `${hours}:0${minutes}`;
  return `${hours}:${minutes}`;
};

const checkIfShiftExists = (allShifts, shift) => {
  let includes = false;
  allShifts.forEach((arr) => {
    if (arr.shifts.includes(shift)) includes = true;
  });
  return includes;
};

const sortByDay = (shifts) => {
  const sorted = [];
  shifts.forEach((shift, index) => {
    if (!checkIfShiftExists(sorted, shift)) {
      const day = {
        shifts: [shift],
        dailyShiftsLength: shift.shiftLength,
        displayDate: shift.displayDate
      };
      shifts.slice(index + 1).forEach((checkShift) => {
        if (shift.date === checkShift.date) {
          day.shifts.push(checkShift);
          day.dailyShiftsLength += shift.shiftLength;
        }
      });
      sorted.push(day);
    }
  });
  return sorted;
};

const shiftsData = [
  {
    id: "95a2aaca-bab8-4504-8646-f75b325ec0e7",
    booked: false,
    area: "Helsinki",
    startTime: 1523610000000,
    endTime: 1523617200000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: true,
    area: "Tampere",
    startTime: 1537354800000,
    endTime: 1537362000000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: true,
    area: "Travnik",
    startTime: 1537448400000,
    endTime: 1537457400000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: false,
    area: "Tampere",
    startTime: 1537621200000,
    endTime: 1537624800000,
  },
  {
    id: "001e40e5-05dc-4b9d-bdc5-cae63f651970",
    booked: true,
    area: "Tampere",
    startTime: 1537635600000,
    endTime: 1537646400000,
  },
];
