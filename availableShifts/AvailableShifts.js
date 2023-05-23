import { View, Text, StyleSheet, FlatList } from "react-native";
import { sortByCity } from "../maintenance/allAvailableShifts";
import { useEffect, useState } from "react";
import ShiftListing from "../components/ShiftListing";
import CityTopBar from "../components/CityTopBar";

const AvailableShifts = () => {
  const [shiftsByCity, setShiftsByCity] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    sortByCity(setShiftsByCity);
  }, []);
  return shiftsByCity.length > 0 ? (
    <View>
      <CityTopBar
        cities={shiftsByCity}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <View>
        <ShiftListing
          shifts={shiftsByCity[activeIndex].shifts}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </View>
    </View>
  ) : (
    <Text>No shifts for you!</Text>
  );
};

export default AvailableShifts;
