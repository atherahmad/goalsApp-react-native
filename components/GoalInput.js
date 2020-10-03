import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";
import { Button as Buttonss } from "react-native-elements";

const GoalInput = (props) => {
  const [newGoal, setNewGoal] = useState("");
  const changeHandler = (textInput) => {
    setNewGoal(textInput);
  };

  return (
    <Modal visible={props.showAddGoal} transparent={true}>
      <View style={styles.mainScreen}>
        <View style={{ width: "70%", backgroundColor: "white", opacity: 1 }}>
          <TextInput
            placeholder="Pleae enter your goal"
            style={styles.textInput}
            onChangeText={changeHandler}
            value={newGoal}
          />
        </View>
        <View style={styles.AddButton}>
          <Buttonss
            color="black"
            title="Add"
            loading={props.inProgress}
            onPress={() => {
              if (props.inProgress) return;
              if (newGoal === "") return;
              props.activateProgress();
              setNewGoal("");
              props.addGoalHandler(newGoal);
            }}
          />
        </View>
        <View style={styles.AddButton}>
          <Button
            disabled={props.inProgress}
            title="Cancel"
            color="red"
            onPress={() => {
              setNewGoal("");
              props.hideAddGoalModal();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;
const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#841584",
    borderBottomWidth: 2,
    margin: 3,
    padding: 3,
  },
  mainScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  AddButton: {
    width: "40%",
    padding: 3,
    margin: 3,
  },
});
