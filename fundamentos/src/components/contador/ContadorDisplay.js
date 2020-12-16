import React from "react";
import { Text, View, StyleSheet } from "react-native";

import styles from "../styles";

export default function (props) {
  return (
    <View style={style.display}>
      <Text style={[styles.textG, style.displayText]}>{props.num}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  display: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
    width: 300,
  },
  displayText: {
    color: "#FFF",
  },
});
