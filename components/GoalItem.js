import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
const GoalItem = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const [infoText, setInfoText] = useState(false);
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.listGoals}
          onLongPress={() => setShowDelete((show) => (show = true))}
          onPress={() => setInfoText((show) => (show = !show))}
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
              <View style={{ margin: 2 }}>
                <Button
                  onPress={() => setShowDelete((show) => (show = false))}
                  title="Cancel"
                  color="blue"
                />
              </View>
              <View style={{ margin: 2 }}>
                <Button
                  onPress={props.deleteGoal.bind(this, props.goalId)}
                  title="Delete"
                  color="red"
                />
              </View>
            </View>
          ) : null}
        </View>
      </View>
      {infoText ? (
        <View>
          <Text style={{ fontSize: 8, fontWeight: "700", padding: "auto" }}>
            Created on {props.date}
          </Text>
        </View>
      ) : null}
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
