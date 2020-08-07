import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { decode, encode } from 'base-64'
import VistaPrincipal from './src/vistas/VistaChat/index';
import store from './src/redux/store';

if (!global.btoa) {
  global.btoa = encode;
  }
  
if (!global.atob) {
  global.atob = decode;
  }

class App extends PureComponent {
  render(){
    return (
      <Provider store={store}>
          <VistaPrincipal />
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
