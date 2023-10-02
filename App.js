import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textBox}>
       <Text>ENTRAR COM GOOGLE</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.textBox}>
          <Text>ENTRAR COM E-MAIL</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.textBox}>
          <Text>JÁ POSSUO CADASTRO</Text>
         </TouchableOpacity>
         <Text>OU<Text></Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D3469',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox:{
    borderRadius: 30,
    backgroundColor: '#0000ff',
    padding: 16,
  
  },
  textContainer:{
    backgroundColor: 'ffffff',
    
    bordertop: 30,  
  }, 
  text:{
    
  }

});
