import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
export default function Title() {
  return <Text style={styles.title}>Opponent's Guess</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
