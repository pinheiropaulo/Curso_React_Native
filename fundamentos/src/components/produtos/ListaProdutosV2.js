import React from "react";
import { Text, FlatList, SafeAreaView } from "react-native";

import produtos from "./produtos";

import style from "../styles";

export default function (props) {
  const produtoRender = ({ item: p }) => {
    return (
      <Text>
        {p.id} ) {p.nome} - R$ {p.preco}
      </Text>
    );
  };

  return (
    <SafeAreaView
      style={{
        marginTop: 100,
        marginBottom: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={style.textG}> Lista de Produtos V2 </Text>
      <FlatList
        data={produtos}
        keyExtractor={(i) => `${i.id}`}
        renderItem={produtoRender}
      />
    </SafeAreaView>
  );
}
