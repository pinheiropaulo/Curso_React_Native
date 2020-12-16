import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ({ num }) {
  return (
    <View style={style.container}>
      <Text style={style.Num}>{num}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: "#000",
    margin: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  Num: {
    color: "#FFF",
    fontSize: 20,
    alignItems: "center",
  },
});
