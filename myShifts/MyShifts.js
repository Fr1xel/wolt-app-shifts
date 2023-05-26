import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { bookedShifts, fetchShifts } from "../maintenance/shiftFetch";
import { useState } from "react";
import { shiftStyles } from "../styles/shiftListingStyles";
import ShiftListing from "../components/ShiftListing";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";

const MyShifts = () => {
  const [shifts, setShifts] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      bookedShifts(setShifts);
    }, [])
  );
  return (
    <View style={shiftStyles.shiftsContainer}>
      <StatusBar style="dark" />
      {shifts.length ? (
        <ShiftListing shifts={shifts} setShifts={setShifts} />
      ) : (
        <Text style={shiftStyles.errorText}>
          You have no shifts in the future
        </Text>
      )}
    </View>
  );
};

export default MyShifts;
