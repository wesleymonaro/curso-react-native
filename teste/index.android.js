import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.floor(Math.random() * 10);
  alert(numero_aleatorio)
}

const App = () => {
  return(
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button 
        title="Gerar número randomico"
        onPress={geraNumeroAleatorio} />
    </View>
  );
};

AppRegistry.registerComponent('teste', () => App);