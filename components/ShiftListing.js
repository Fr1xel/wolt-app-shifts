import { shiftStyles } from "../styles/shiftListingStyles";
import { View, Text, FlatList, SectionList } from "react-native";
import {
  UpdateCityState,
  calculateDailyShifts,
  updateState,
} from "../maintenance/dateCalculating";
import Button from "./Button";

const ShiftListing = ({ shifts, setShifts, cityShifts }) => {
  const updateStateFunction = cityShifts
    ? UpdateCityState
    : calculateDailyShifts;
  return (
    <SectionList
      style={shiftStyles.fullSizeView}
      sections={shifts}
      keyExtractor={(item, index) => item.displayDate + index}
      renderSectionHeader={({ section: { title } }) => {
        return (
          <View style={shiftStyles.dayHeader}>
            <Text style={shiftStyles.dayTitle}>{title.displayDate}</Text>
            <Text style={shiftStyles.shiftText}>
              {title.numOfShifts} {title.numOfShifts > 1 ? "shifts" : "shift"},{" "}
              {title.dailyShiftsLength} hours
            </Text>
          </View>
        );
      }}
      renderItem={({ item }) => (
        <View style={shiftStyles.singleShiftView}>
          <View>
            <Text style={shiftStyles.shiftTime}>
              {item.startTime}-{item.endTime}
            </Text>
            <Text style={shiftStyles.shiftCity}>{item.city}</Text>
          </View>
          <Button
            shift={item}
            text={item.booked ? "Cancel" : "Book"}
            onPress={() =>
              updateStateFunction(
                cityShifts ? cityShifts : shifts,
                setShifts,
                item
              )
            }
          />
        </View>
      )}
    />
  );
};

export default ShiftListing;
