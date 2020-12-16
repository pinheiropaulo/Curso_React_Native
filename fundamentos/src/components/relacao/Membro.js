import React from "react";
import { Text } from "react-native";

import style from "../styles";

export default function (props) {
  return (
    <>
      <Text style={style.textG}>Nome : {props.nome}</Text>
      <Text style={style.textG}>Sobrenome : {props.sobrenome}</Text>
    </>
  );
}
