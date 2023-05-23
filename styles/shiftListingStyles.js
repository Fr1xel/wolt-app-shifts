import { StyleSheet } from "react-native";

export const shiftStyles = StyleSheet.create({
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
      textAlign: "center",
    },
  });