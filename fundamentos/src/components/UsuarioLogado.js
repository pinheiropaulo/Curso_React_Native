import React from "react";
import { Text } from "react-native";

import style from "./styles";

import IF from "./If";

export default (props) => {
  const usuario = props.usuario || {};

  return (
    <>
      <IF teste={usuario && usuario.nome && usuario.email}>
        <Text style={style.textG}>Usuário Logado:</Text>
        <Text style={style.textG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </IF>
    </>
  );
};
