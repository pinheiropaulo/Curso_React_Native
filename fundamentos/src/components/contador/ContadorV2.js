import React, { useState } from "react";
import { Text } from "react-native";

import ContadorDisplay from "./ContadorDisplay";
import ContadorBotoes from "./ContadorBotoes";

import style from "../styles";

export default function (props) {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={style.textG}>Contador V2</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
}
