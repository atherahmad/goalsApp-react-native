import React from "react";
import { Icon } from "react-native-elements";
import { View } from "react-native";
const AddIcon = (props) => {
  return (
    <View>
      <Icon
        name="plus"
        size={26}
        color="white"
        type="font-awesome"
        onPress={props.showAddGoalModal}
      />
    </View>
  );
};
export default AddIcon;
