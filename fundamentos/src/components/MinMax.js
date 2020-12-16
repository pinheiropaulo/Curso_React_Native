import React from "react";
import { Text, View } from "react-native";

import style from "./styles";

export default function MinMax(props) {
  console.warn(props);

  return (
    <View>
      <Text style={style.textG}>
        O Valor {props.min} é maior que o valor {props.max}!
      </Text>
    </View>
  );
}
