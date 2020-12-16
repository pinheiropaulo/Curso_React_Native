import React, { useState } from "react";
import { Text } from "react-native";

import Filho from "./Filho";

import style from "../styles";

export default function (props) {
  const [num, setNum] = useState(0);

  function exibirValor(numero) {
    setNum(numero);
  }

  return (
    <>
      <Text style={style.textG}>{num}</Text>
      <Filho funcao={exibirValor} min={1} max={60} />
    </>
  );
}
