import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const changeHandler = (textInput) => {
    setNewGoal(textInput);
  };
  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: goals.length.toString(), newGoal },
    ]);
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
      <FlatList
        data={goals}
        renderItem={(goalsData) => (
          <View style={styles.listGoals} onT>
            <Text>{goalsData.item.newGoal}</Text>
          </View>
        )}
      />
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
