import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import Colors from "../../constants/colors";

interface InstructionTextProps {
  children: string;
  style: StyleProp<TextStyle>;
}

export default function InstructionText(props: InstructionTextProps) {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
