import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface TitleProps {
  children: string;
}
export default function Title(props: TitleProps) {
  return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
