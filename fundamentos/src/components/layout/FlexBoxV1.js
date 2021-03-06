import React from "react";
import { View, StyleSheet } from "react-native";

import Quadrado from "./Quadrado";

export default function () {
  return (
    <View style={style.FlexV1}>
      <Quadrado color="#ffd600" />
      <Quadrado color="#d50000" />
      <Quadrado color="#01579b" />
      <Quadrado color="#64dd17" />
      <Quadrado color="#aa00ff" />
    </View>
  );
}

const style = StyleSheet.create({
  FlexV1: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
});
