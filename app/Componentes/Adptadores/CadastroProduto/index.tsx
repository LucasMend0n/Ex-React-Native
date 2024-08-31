import { useState } from "react"
import { TextInput, View, Text } from "react-native"

const CadastroProduto = ()=>{
    let[nome,setNome] = useState('')
    let[descricao,setDescricao] = useState('')
    


    return(
        <View>
            <Text >Nome:</Text>
            <TextInput onChangeText={setNome} value={nome}></TextInput>
            <TextInput onChangeText={setDescricao} value={descricao}></TextInput>
            
        </View>
    )
}