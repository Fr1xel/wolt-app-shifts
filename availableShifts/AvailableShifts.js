import { View, Text } from "react-native";
import { sortByCity } from "../maintenance/allAvailableShifts";
import { useEffect, useState } from "react";

const AvailableShifts = () => {
  const [shiftsByCity, setShiftsByCity] = useState([]);
  useEffect(() => {
    sortByCity(setShiftsByCity);
  }, []);
  return shiftsByCity.length > 0 ? (
    <View>
      <Text>AvailableShifts</Text>
    </View>
  ) : (
    <Text>No shifts for you!</Text>
  );
};

export default AvailableShifts;
