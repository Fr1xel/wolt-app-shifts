import { shiftStyles } from "../styles/shiftListingStyles";
import { View, Text, FlatList } from "react-native";
import { updateState } from "../maintenance/dateCalculating";
import Button from "./Button";

const ShiftListing = ({ shifts, setShifts }) => {
  return (
    <FlatList
      style={shiftStyles.fullSizeView}
      data={shifts}
      renderItem={({ item }) => {
        return (
          <View>
            <View style={shiftStyles.dayHeader}>
              <Text style={shiftStyles.dayTitle}>{item.displayDate}</Text>
              <Text style={shiftStyles.shiftText}>
                {item.shifts?.length}{" "}
                {item.shifts?.length > 1 ? "shifts" : "shift"},{" "}
                {item.dailyShiftsLength} hours
              </Text>
            </View>
            <FlatList
              data={item.shifts}
              renderItem={({ item, index }) => {
                return (
                  <View style={shiftStyles.singleShiftView}>
                    <View>
                      <Text style={shiftStyles.shiftTime}>
                        {item.startTime}-{item.endTime}
                      </Text>
                      <Text style={shiftStyles.shiftCity}>{item.city}</Text>
                    </View>
                    <Button
                      shift={item}
                      text="Cancel"
                      onPress={() => updateState(shifts, setShifts, item)}
                    />
                  </View>
                );
              }}
            />
          </View>
        );
      }}
    />
  );
};

export default ShiftListing;
