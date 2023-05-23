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
import {
  calculateDateMatching,
  updateState,
} from "../maintenance/dateCalculating";
import Button from "../components/Button";
import { shiftStyles } from "../styles/shiftListingStyles";
import ShiftListing from "../components/ShiftListing";

const MyShifts = () => {
  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    bookedShifts(setShifts);
  }, []);
  calculateDateMatching();
  return (
    <View style={shiftStyles.shiftsContainer}>
      <StatusBar style="dark" />
      {shifts.length ? (
        <ShiftListing shifts={shifts} setShifts={setShifts}/>
      ) : (
        <Text style={shiftStyles.errorText}>You have no shifts in the future</Text>
      )}
    </View>
  );
};

export default MyShifts;
