import React, { useState } from "react";
import { Text, Button } from "react-native";

import style from "./styles";

export default function Contador({ inicial = 0, passo = 1 }) {
  //let numero = props.inicial;
  const [numero, setNumero] = useState(inicial);

  const inc = () => setNumero(numero + passo);

  const dec = () => setNumero(numero - passo);

  return (
    <>
      <Text style={style.textG}>Contador</Text>
      <Text>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
}
