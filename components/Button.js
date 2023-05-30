import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { calculateDateMatching } from "../maintenance/dateCalculating";
import { overlappingShifts } from "../maintenance/allAvailableShifts";

const Button = ({ lastShift, text, shift, onPress }) => {
  const buttonDisabled = calculateDateMatching(
    shift.startTimeNumber,
    shift.endTimeNumber
  ) || overlappingShifts(shift, lastShift);
  
  const buttonStyle = buttonDisabled
    ? styles.disabledButton
    : shift.booked ? styles.activeButton : styles.bookButton;
  const textStyle = buttonDisabled
    ? styles.disabledButtonText
    : shift.booked ? styles.activeButtonText : styles.bookButtonText;

  return (
    <TouchableOpacity style={buttonStyle} disabled={buttonDisabled} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabledButton: {
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#adbbd9",
  },
  activeButton: {
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#e2006a",
  },
  disabledButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#adbbd9",
  },
  activeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2006a",
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#16a64d",
  },
  bookButton: {
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#55cb82",
  },
});

export default Button;
