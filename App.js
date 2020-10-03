import React, { useState, useEffect } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { View, FlatList } from "react-native";
import { Header } from "react-native-elements";
import axios from "axios";
import AddIcon from "./components/AddIcon";
import Loader from "./components/Loader";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [inProgress, setInProgress] = useState(false);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const showAddGoalModal = () => setShowAddGoal(true);
  const hideAddGoalModal = () => setShowAddGoal(false);
  const activateProgress = () => setInProgress(true);
  const deactiveProgress = () => setInProgress(false);

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
        if (res.data.status === "success") {
          setGoals(res.data.data);
          deactiveProgress();
          setShowAddGoal(false);
          return;
        }
        alert("Sorry your request is failed. Check your credentials");
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
      <Header
        backgroundColor="#5B0C5B"
        leftComponent={<AddIcon showAddGoalModal={showAddGoalModal} />}
        centerComponent={{ text: "My Tasks", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <GoalInput
        addGoalHandler={addGoalHandler}
        showAddGoal={showAddGoal}
        hideAddGoalModal={hideAddGoalModal}
        activateProgress={activateProgress}
        inProgress={inProgress}
      />
      {goals ? (
        <FlatList
          keyExtractor={(item) => item._id}
          data={goals}
          renderItem={(goalsData) => {
            return (
              <GoalItem
                showAddGoal={showAddGoal}
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
