import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Input } from "native-base";

import MegaNumero from "./MegaNumero";

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumero = (qtde) => {
    this.setState({ qtdeNumeros: +qtde });
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  // gerarNumeros = () => {
  //   const numeros = Array(this.state.qtdeNumeros)
  //     .fill()
  //     .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
  //     .sort((a, b) => a - b);
  //   this.setState({ numeros });
  // };

  //Alternativa
  gerarNumeros = () => {
    const { qtdeNumeros } = this.state;
    const numeros = [];
    for (let i = 0; i < qtdeNumeros; i++) {
      const n = this.gerarNumeroNaoContido(numeros);
      numeros.push(n);
    }
    numeros.sort((a, b) => a - b);
    this.setState({ numeros });
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map((num) => {
      return <MegaNumero key={num} num={num} />;
    });
  };

  render() {
    return (
      <SafeAreaView style={style.container}>
        <Text style={style.title}>Gerador de Mega-Sena</Text>
        <View style={style.textInput}>
          <Input
            textAlign={"center"}
            keyboardType={"numeric"}
            style={{ borderBottomWidth: 1 }}
            placeholder="Qtde de Números"
            value={`${this.state.qtdeNumeros}`}
            onChangeText={this.alterarQtdeNumero}
          />
        </View>
        <TouchableOpacity style={style.button} onPress={this.gerarNumeros}>
          <Text style={{ color: "#FFF", fontSize: 15 }}>Gerar</Text>
        </TouchableOpacity>
        <View style={style.numeros}>{this.exibirNumeros()}</View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 80,
    marginTop: 10,
    backgroundColor: "#00b0ff",
    borderRadius: 5,
  },
  textInput: {
    justifyContent: "center",
    width: 100,
    height: 50,
  },
  numeros: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
