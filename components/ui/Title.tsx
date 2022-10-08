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
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
