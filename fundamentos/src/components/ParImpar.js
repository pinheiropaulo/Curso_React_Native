import React from "react";
import { Text, View } from "react-native";

import style from "./styles";

export default function ({ num = 0 }) {
  return (
    <View>
      <Text style={style.textG}>O resultado é:</Text>
      {num % 2 === 0 ? (
        <Text style={style.textG}>Par</Text>
      ) : (
        <Text style={style.textG}>Ímpar</Text>
      )}
    </View>
  );
}
