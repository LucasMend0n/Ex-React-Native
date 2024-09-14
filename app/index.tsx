import { useState,useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Componentes/Adptadores/ListaProdutos";
import Style from "./Styles/Default";
import axios from "axios";
import { useRouter, useFocusEffect } from "expo-router";




export default function Index() {
  const router = useRouter();  

 let[produtos,setProdutos]=useState([]);

 useEffect(()=>{
  carregarProdutos();
},[]);

  useFocusEffect(() => {
    carregarProdutos();
  })

function carregarProdutos(){
  axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
    .then((resp)=>{
      setProdutos(resp.data);
    })

}

  return (
    <View
      style={Style.container}
      >
      <ListaProdutos produtos={produtos} aoAtualizar={carregarProdutos}></ListaProdutos>

      <Button title='Cadastrar' onPress={()=>{telaCadastro()}}></Button>


    </View>
  );
  function telaCadastro(){
    router.push('./Telas/cadastro')
  }
  
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 20,
    

  },
  text: {
    color: "black",
    fontSize: 25,
    fontFamily: "sanserifa",
    marginBottom: 10,
    textAlign: "left",

  },

  titulo:{
    color: "black",
    fontSize: 30,
    fontFamily: "sanserifa",
    marginBottom: 10,
    textAlign: "left",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  }

});
