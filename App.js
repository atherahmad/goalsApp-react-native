import React, { useState, useEffect } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { View, FlatList } from "react-native";
import axios from "axios";

export default function App() {
  const [goals, setGoals] = useState([]);
  const fetchGoals = () => {
    axios
      .get(`https://react-native-goalapp.herokuapp.com/api/goals/getgoals`)
      .then((res) => {
        setGoals(res.data.data);
      })
      .catch((err) => err);
  };
  useEffect(() => {
    fetchGoals();
  }, []);

  const addGoalHandler = (newGoal) => {
    axios
      .post(`https://react-native-goalapp.herokuapp.com/api/goals/newgoal`, {
        value: newGoal,
      })
      .then((res) => {
        if (res.data.status === "success") setGoals(res.data.data);
        else alert("Sorry your request is failed. Check your credentials");
      })
      .catch((err) => alert(err));
  };
  const deleteGoal = (targetId) => {
    axios
      .post(`https://react-native-goalapp.herokuapp.com/api/goals/deletegoal`, {
        id: targetId,
      })
      .then((res) => {
        if (res.data.status === "success") alert("successfully deleted");
        else alert("Sorry your request is failed. Check your credentials");
        fetchGoals();
      })
      .catch((err) => alert(err));
  };
  return (
    <View style={{ paddingTop: 30 }}>
      <GoalInput addGoalHandler={addGoalHandler} />
      {goals ? (
        <FlatList
          keyExtractor={(item) => item._id}
          data={goals}
          renderItem={(goalsData) => {
            return (
              <GoalItem
                data={goalsData.item.goalTitle}
                deleteGoal={deleteGoal}
                goalId={goalsData.item._id}
                date={goalsData.item.timeStamp}
                time={goalsData.item.timeStamp}
                goals={goals}
              />
            );
          }}
        />
      ) : null}
    </View>
  );
}
