import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function () {
  const [nome, setNome] = useState("Teste");

  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite Seu Nome"
        value={null}
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  );
}
