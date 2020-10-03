import React from "react";
import { Image } from "react-native-elements";
import { Modal, View } from "react-native";
import Progress from "../assets/loader.png";
const Loader = () => {
  return <Image source={Progress} style={{ width: 100, height: 100 }} />;
};

export default Loader;
