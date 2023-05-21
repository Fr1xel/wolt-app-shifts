import { View, Text } from "react-native";
import { sortByCity } from "../maintenance/allAvailableShifts";
import { useEffect, useState } from "react";

const AvailableShifts = () => {
    const [shiftsByCity, setShiftsByCity] = useState([])
    useEffect(() => {
        sortByCity(setShiftsByCity)
    }, [])
    console.log(shiftsByCity)    
  return (
    <View>
      <Text>AvailableShifts</Text>
    </View>
  );
};

export default AvailableShifts