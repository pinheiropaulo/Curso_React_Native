import React from "react";
import { Text } from "react-native";

import style from "./styles";

export default function Comp() {
  return <Text style={style.textG}>Comp #Oficial</Text>;
}
function Comp1() {
  return <Text style={style.textG}>Comp #02</Text>;
}
function Comp2() {
  return <Text style={style.textG}>Comp #03</Text>;
}

export { Comp1, Comp2 };
