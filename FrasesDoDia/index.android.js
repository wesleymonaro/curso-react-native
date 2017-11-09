import React from 'react'
import { Text, AppRegistry} from 'react-native'

const Estilos = {
  estiloTexto: {
    fontSize: 20
  }
}

const App = () => {
  return(
    <Text style={Estilos.estiloTexto}>Olá</Text>
  );
}; 

AppRegistry.registerComponent('FrasesDoDia', () => App)