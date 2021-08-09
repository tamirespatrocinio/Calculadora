import React, {useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  Dimensions, 
  SafeAreaView,
  Button,
  StatusBar
  } from 'react-native';
import matematica from './assets/matematica.jpg';

const largura = Dimensions.get('screen').width;

export default function App() {
  const [valor1, setVALOR1] = useState('');
  const [valor2, setVALOR2] = useState('');


  function soma(){
    const resultado = parseFloat(valor1) + parseFloat(valor2);
    alert(valor1 + ' + ' + valor2 + ' = ' + resultado);
  }

  function multiplicar(){
    const resultado = parseFloat(valor1) * parseFloat(valor2);
    alert(valor1 + ' * ' + valor2 + ' = ' + resultado);
  }

  function subtrair(){
    const resultado = parseFloat(valor1) - parseFloat(valor2);
    alert(valor1 + ' - ' + valor2 + ' = ' + resultado);
  }

  function dividir(){
    const resultado = (parseFloat(valor1) / parseFloat(valor2)).toFixed(2);
    alert(valor1 + ' / ' + valor2 + ' = ' + resultado);
  }

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground style = {styles.imgWallpaper} source={matematica} blurRadius={0.6}>
      <Text style={styles.paragraph}> Calculadora </Text>

      <TextInput style={styles.input} keyboardType="numeric" value={valor1} onChangeText={(valor1)=>setVALOR1(valor1)} placeholder="Digite o primeiro valor" />
      <TextInput style={styles.input} keyboardType="numeric" value={valor2} onChangeText={(valor2)=>setVALOR2(valor2)} placeholder="Digite o segundo valor" />

      <View style={styles.btncontainer}>
        <TouchableOpacity>
          <Button color="#841584" onPress={soma} title="Somar"/>       
        </TouchableOpacity>

        <TouchableOpacity onPress={multiplicar}>
          <Button color="#841584" onPress={multiplicar} title="Multiplicar"/>          
        </TouchableOpacity>
  
        <TouchableOpacity onPress={subtrair}>
        <Button color="#841584" onPress={subtrair} title="Subtrair"/> 
        </TouchableOpacity>
        
        <TouchableOpacity onPress={dividir}>
        <Button color="#841584" onPress={dividir} title="Dividir"/> 
        </TouchableOpacity>       
      </View>
      </ImageBackground>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  paragraph: {
    marginTop: 150,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform:'uppercase',
    color: '#282721',
    lineHeight: 34,
    textShadowColor:"#000",
    textShadowOffset:{width: 2, height: 1},
    textShadowRadius:4,
    padding: 5,
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  input:{
    backgroundColor:'#fff',
    borderRadius:8,
    margin:20,
    padding:5,
    fontSize:20,
    height:50,
    textAlign:'center',
    borderColor: "#841584", 
    borderWidth: 1
  },
    imgWallpaper:{
    flex:1,
    resizeMode:'cover',
    width:largura 
  },
  btncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', 
    marginTop: 20,
    marginLeft: 20, 
    marginRight: 20 
  }
});