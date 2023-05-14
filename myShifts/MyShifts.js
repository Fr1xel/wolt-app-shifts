import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const MyShifts= () => {
    return (
        <View style={styles.shiftsContainer}>
            <StatusBar style="dark" />
            <View style={styles.dayHeader}>
                <Text style={styles.dayTitle}>Today</Text>
                <Text style={styles.shiftText}>2 shifts, 4 hours</Text>
            </View>
            <View style={styles.singleShiftView}>
                <View>
                    <Text style={styles.shiftTime}>14:00-16:00</Text>
                    <Text style={styles.shiftCity}>Helsinki</Text>
                </View>
                <TouchableOpacity style={styles.shiftButton}>
                    <Text style={styles.shiftButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.singleShiftView}>
                <View>
                    <Text style={styles.shiftTime}>14:00-16:00</Text>
                    <Text style={styles.shiftCity}>Helsinki</Text>
                </View>
                <TouchableOpacity style={styles.shiftButton}>
                    <Text style={styles.shiftButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
        color: "#4F6C92"
    },
    shiftsContainer: {
        marginTop: 50,
        flex: 1 
    },
    shiftText: {
        color: "#4F6C92",
        fontSize: 18,
        marginLeft: 20 
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
        fontWeight: "bold"
    },
    shiftCity: {
        fontSize: 15,
        color: "#A4B8D3",
        fontWeight: "bold"
    },
    shiftButton: {
        padding: 12,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#adbbd9"
    },
    shiftButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#adbbd9"
    }
})

export default MyShifts;