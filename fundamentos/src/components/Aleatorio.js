import React from "react";
import { View, Text } from "react-native";

import style from "./styles";

export default function Aleatorio({ min, max }) {
  const random = Math.floor(Math.random(min) * max);

  return (
    <View>
      <Text style={style.textG}>O valor é : {random} </Text>
    </View>
  );
}
