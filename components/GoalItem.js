import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
const GoalItem = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        style={styles.listGoals}
        onLongPress={() => setShowDelete((show) => (show = true))}
      >
        <Text>{props.data}</Text>
      </TouchableOpacity>
      <View>
        {showDelete ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableHighlight style={{ margin: 2 }}>
              <Button
                onPress={() => setShowDelete((show) => (show = false))}
                title="Cancel"
                color="blue"
              />
            </TouchableHighlight>
            <TouchableHighlight style={{ margin: 2 }}>
              <Button
                onPress={props.deleteGoal.bind(this, props.goalId)}
                title="Delete"
                color="red"
              />
            </TouchableHighlight>
          </View>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listGoals: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
