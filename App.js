import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { View, FlatList } from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const date = new Date();

  const addGoalHandler = (newGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: goals.length.toString(), value: newGoal, timeStamp: Date.now() },
    ]);
  };
  const deleteGoal = (targetId) => {
    setGoals((currentGoals) =>
      currentGoals.filter((value) => value.id !== targetId)
    );
  };
  return (
    <View style={{ paddingTop: 30 }}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(goalsData) => (
          <GoalItem
            data={goalsData.item.value}
            deleteGoal={deleteGoal}
            goalId={goalsData.item.id}
            date={goalsData.item.timeStamp}
            time={goalsData.item.timeStamp}
          />
        )}
      />
    </View>
  );
}
