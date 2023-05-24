import { useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CityTopBar = ({ cities, activeIndex, setActiveIndex }) => {
  return (
    <View style={styles.topBarWrapper}>
      <FlatList
        keyExtractor={(item) => + item.cityName + item.id}
        columnWrapperStyle={
          cities.length > 1 && { justifyContent: "space-around" }
        }
        numColumns={cities.length}
        data={cities}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => setActiveIndex(index)}>
              <Text
                style={
                  activeIndex === index
                    ? styles.topBarTextActive
                    : styles.topBarTextInactive
                }
              >
                {item.cityName}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topBarWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 40,
    borderBottomWidth: 1,
    borderColor: "#4f6c92",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  topBarTextInactive: {
    fontSize: 18,
    fontWeight: 600,
    color: "grey",
  },
  topBarTextActive: {
    fontSize: 20,
    fontWeight: 600,
    color: "#004fb4",
  },
});

export default CityTopBar;
