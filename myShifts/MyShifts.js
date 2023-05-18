import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { bookedShifts, fetchShifts } from "../maintenance/shiftFetch";
import { useEffect, useState } from "react";
import { calculateDateMatching } from "../maintenance/dateCalculating";
import Button from "../components/Button";

const MyShifts = () => {
  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    bookedShifts(setShifts);
  }, []);
  calculateDateMatching();
  return (
    <View style={styles.shiftsContainer}>
      <StatusBar style="dark" />
      {shifts.length ? (
        <FlatList
          style={styles.fullSizeView}
          data={shifts}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.dayHeader}>
                  <Text style={styles.dayTitle}>{item.displayDate}</Text>
                  <Text style={styles.shiftText}>
                    {item.shifts.length}{" "}
                    {item.shifts.length > 1 ? "shifts" : "shift"},{" "}
                    {item.dailyShiftsLength} hours
                  </Text>
                </View>
                <FlatList
                  data={item.shifts}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.singleShiftView}>
                        <View>
                          <Text style={styles.shiftTime}>
                            {item.startTime}-{item.endTime}
                          </Text>
                          <Text style={styles.shiftCity}>{item.city}</Text>
                        </View>
                        <Button shift={item} text="Cancel" />
                      </View>
                    );
                  }}
                />
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.errorText}>You have no shifts in the future</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dayHeader: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#CBD2E1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F6C92",
  },
  shiftsContainer: {
    marginTop: 50,
    flex: 1,
  },
  shiftText: {
    color: "#4F6C92",
    fontSize: 18,
    marginLeft: 20,
  },
  singleShiftView: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#adbbd9",
    borderBottomWidth: 1,
  },
  shiftTime: {
    fontSize: 18,
    color: "#4F6C92",
    fontWeight: "bold",
  },
  shiftCity: {
    fontSize: 15,
    color: "#A4B8D3",
    fontWeight: "bold",
  },
  fullSizeView: {
    height: "100%",
    width: "100%",
  },
  errorText: {
    fontSize: 35,
    color: "#4F6C92",
    textAlign: "center"
  }
});

export default MyShifts;
