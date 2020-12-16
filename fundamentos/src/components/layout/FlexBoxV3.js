import React from "react";
import { View, StyleSheet } from "react-native";

import Quadrado from "./Quadrado";

export default function () {
  return (
    <View style={style.FlexV3}>
      <Quadrado color="#ffd600" lado={20} />
      <Quadrado color="#d50000" lado={30} />
      <Quadrado color="#01579b" lado={40} />
      <Quadrado color="#64dd17" lado={50} />
      <Quadrado color="#aa00ff" lado={60} />
    </View>
  );
}

const style = StyleSheet.create({
  FlexV3: {
    height: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#000",
  },
});
