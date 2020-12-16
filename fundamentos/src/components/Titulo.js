import React from "react";
import { Text } from "react-native";

import style from "./styles";

export default function Titulo(props) {
  return (
    <>
      <Text style={style.textG}>{props.principal}</Text>
      <Text>{props.secundario}</Text>
    </>
  );
}
