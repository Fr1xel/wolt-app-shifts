import { View, Text, StyleSheet } from "react-native";
import { sortByCity } from "../maintenance/allAvailableShifts";
import { useEffect, useState } from "react";

const AvailableShifts = () => {
  const [shiftsByCity, setShiftsByCity] = useState([]);
  useEffect(() => {
    sortByCity(setShiftsByCity);
  }, []);
  return shiftsByCity.length > 0 ? (
    <View style={styles.topBarWrapper}>
      <Text style={styles.topBarText}>Travnik</Text>
      <Text style={styles.topBarText}>Tampere</Text>
      <Text style={styles.topBarText}>Helsinki</Text>
    </View>
  ) : (
    <Text>No shifts for you!</Text>
  );
};

const styles = StyleSheet.create({
    topBarWrapper: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
        borderBottomWidth: 1,
        borderColor: "#4f6c92"
    },
    topBarText: {
        fontSize: 18,
        fontWeight: 600,
        color: "grey",
    }
})

export default AvailableShifts;
