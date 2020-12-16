import React from "react";
import { Text, Platform } from "react-native";

import style from "./styles";

export default function () {
  if (Platform.OS === "android") {
    return <Text style={style.textG}>Android</Text>;
  } else if (Platform.OS === "ios") {
    return <Text style={style.textG}>IOS</Text>;
  } else {
    return <Text style={style.textG}>Algo deu Errado</Text>;
  }
}
