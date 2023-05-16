import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { calculateDateMatching } from "../maintenance/dateCalculating";

const Button = ({ type, text, shift }) => {
  const buttonDisabled = calculateDateMatching(
    shift.startTimeNumber,
    shift.endTimeNumber
  );

  const buttonStyle = buttonDisabled
    ? styles.disabledButton
    : styles.activeButton;
  const textStyle = buttonDisabled
    ? styles.disabledButtonText
    : styles.activeButtonText;

  return (
    <TouchableOpacity style={buttonStyle} disabled={buttonDisabled}>
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
  }
});

export default Button;
