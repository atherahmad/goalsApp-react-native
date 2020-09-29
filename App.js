import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const changeHandler = (textInput) => {
    setNewGoal(textInput);
  };
  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, newGoal]);
    setNewGoal(" ");
  };
  return (
    <View style={{ paddingTop: 30 }}>
      <View style={styles.mainScreen}>
        <TextInput
          placeholder="Pleae enter your goal"
          style={styles.textInputCotainer}
          onChangeText={changeHandler}
          value={newGoal}
        />
        <Button title="Add" color="#841584" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {goals.map((goal, index) => (
          <View key={index} style={styles.listGoals} onT>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  },
  textInputCotainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  },
  listGoals: {
    margin: 5,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
