import {StatusBar} from 'expo-StatusBar';
import {styleSheet, Text, TouchableOpacity, View} from  'react-native';

export default function App(){
    return(
        <View>
            <Text>NOME</Text>
            <Text>E-MAIL</Text>
            <TouchableOpacity>
            <Text style={styles.container2}>LEMBRAR MEU E-MAIL</Text>
            </TouchableOpacity>
            <Text>SENHA</Text>
            <Text>REPITIR SENHA</Text>
            <TouchableOpacity>
                <Text>ENTRAR</Text>
            </TouchableOpacity>
            <StatusBar styles = "auto"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container2: {
      
    },
    textBox:{
      borderRadius: 30,
      backgroundColor: '#0000ff',
      padding: 16,
    
    },
})