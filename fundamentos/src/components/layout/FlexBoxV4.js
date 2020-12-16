import React from "react";
import { View, StyleSheet } from "react-native";

export default function () {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0}></View>
      <View style={style.V1}></View>
      <View style={style.V2}></View>
    </View>
  );
}

const style = StyleSheet.create({
  FlexV4: {
    flex: 1,
    width: 100,
    backgroundColor: "#000",
  },
  V0: {
    height: 300,
    backgroundColor: "#d50000",
  },
  V1: {
    flex: 9,
    backgroundColor: "#64dd17",
  },
  V2: {
    flex: 1,
    backgroundColor: "#01579b",
  },
});
