import React from "react";
import { Text, FlatList } from "react-native";

import produtos from "./produtos";

import style from "../styles";

export default function (props) {
  function obterLista() {
    return produtos.map((p) => {
      return (
        <Text key={p.id}>
          {p.id}) {p.nome} tem preço R$ {p.preco}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={style.textG}> Lista de Produtos </Text>
      {obterLista()}
    </>
  );
}
