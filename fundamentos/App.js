import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";

//import Primeiro from "./src/components/Primeiro";
// import CompPadrao, { Comp1, Comp2 } from "./src/components/Multi";
//import MinMax from "./src/components/MinMax";
//import Aleatorio from "./src/components/Aleatorio";
//import Titulo from "./src/components/Titulo";
//import Button from "./src/components/Button";
//import Contador from "./src/components/Contador";
//import Pai from "./src/components/direta/Pai";
//import Pai from "./src/components/indireta/Pai";
//import ContadorV2 from "./src/components/contador/ContadorV2";
//import Diferenciar from "./src/components/Diferenciar";
//import ParImpar from "./src/components/ParImpar";
//import Familia from "./src/components/relacao/Familia";
//import Membro from "./src/components/relacao/Membro";
//import UsuarioLogado from "./src/components/UsuarioLogado";
//import ListaProdutos from "./src/components/produtos/ListaProdutos";
//import ListaProdutosV2 from "./src/components/produtos/ListaProdutosV2";
//import DigiteSeuNome from "./src/components/DigiteSeuNome";
//import Quadrado from "./src/components/layout/Quadrado";
//import FlexBoxV1 from "./src/components/layout/FlexBoxV1";
//import FlexBoxV2 from "./src/components/layout/FlexBoxV2";
//import FlexBoxV3 from "./src/components/layout/FlexBoxV3";
//import FlexBoxV4 from "./src/components/layout/FlexBoxV4";
import Mega from "./src/components/mega/Mega";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "ios" ? (
        <StatusBar style="Dark" />
      ) : (
        <StatusBar style="light" backgroundColor="#000" translucent={false} />
      )}
      <Mega qtdeNumeros={12} />
      {/*
      <FlexBoxV4 />
      <FlexBoxV3 />
      <FlexBoxV2 />
      <FlexBoxV1 />
      <DigiteSeuNome />
      <ListaProdutosV2 />
      <ListaProdutos />
        <UsuarioLogado
        usuario={{ nome: "Paulo", email: "pauloprap57@gmail.com" }}
      />
      <UsuarioLogado usuario={{ nome: "Teste" }} />
      <Familia>
        <Membro nome="Bia" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Silva" />
        <Membro nome="Teste" sobrenome="Silva" />
      </Familia>
      <ParImpar num={3} />
      <Diferenciar />
      <ContadorV2 />
      <Pai />
      <Pai />
      <Contador />
      <Contador inicial={100} passo={10} />
      <Button />
      <Titulo principal="Cadastro de Produtos" secundario="Tela de Cadastro" />
      <Aleatorio min={1} max={99} />
      <MinMax min={3} max={20} />
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro />
      */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
