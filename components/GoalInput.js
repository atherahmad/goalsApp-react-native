import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = (props) => {
  const [newGoal, setNewGoal] = useState("");
  const changeHandler = (textInput) => {
    setNewGoal(textInput);
  };

  return (
    <View style={styles.mainScreen}>
      <TextInput
        placeholder="Pleae enter your goal"
        style={styles.textInputCotainer}
        onChangeText={changeHandler}
        value={newGoal}
      />
      <Button
        title="Add"
        color="#841584"
        onPress={() => {
          if (newGoal === "") return;
          setNewGoal("");
          props.addGoalHandler(newGoal);
        }}
      />
      {/* <Button
        title="Add"
        color="green"
        onPress={props.addGoalHandler.bind(this, newGoal)}
      /> */}
    </View>
  );
};
export default GoalInput;
const styles = StyleSheet.create({
  textInputCotainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  },
  mainScreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
  },
});
