import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

interface GameScreenProps {
  chosenNumber: number;
}

export default function GameScreen(props: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, props.chosenNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
