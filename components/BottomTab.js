import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Footer({ state, descriptors, navigation }) {
  const renderIcon = () => {};
  return (
    <View style={styles.footerWrapper}>
      {state.routes.map((route, index) => {
        if (route.name != "MovieDetails") {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.key}
            >
              <Text
                style={{
                  color: isFocused ? "#004fb4" : "#4F6C92",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  footerWrapper: {
    backgroundColor: "#CBD2E1",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 1,
    padding: 25,
    borderRadius: 20,
  },
  footerButton: {
    textAlign: "center",
  },
});

export default Footer;
