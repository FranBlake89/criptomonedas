import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';


const LogIn = ({navigation}) => {

    const [ user, setUser ] = useState ('')
    const [ pass, setPass ] = useState ('')


    const onPressLogin = async () => {
        try {
            await firebaseService.login(user, pass)
            console.log(user, pass)
            navigation.navigate('Main')
            setPass('')
            setUser('') 
    
        } catch (e) {
            alert (e)
        }
    
    } 
   
    return (
        <View style = { styles.fondo }>
            <View style = { styles.formulario }>        
                <View>
                    <Text style = { styles.label }> Correo electrónico: </Text>
                    <TextInput
                        style = { styles.Input }
                        placeholder = ' Carlos.1234@gmail.com '
                        value = {user}
                        onChange = { (e) => setUser(e.nativeEvent.text)}
                    />
                </View>

                <View>
                    <Text style = { styles.label }> Contraseña: </Text>
                    <TextInput
                        style = { styles.Input }
                        placeholder = ' Contraseña '
                        value = {pass}
                        onChange = { (e) => setPass(e.nativeEvent.text)}
                    />
                </View>

                <View>

                    <TouchableHighlight onPress={ onPressLogin } 
                    style = { styles.btnIniciarSesion }>
                        
                            <Text style = { styles.textIniciarSesion }> Iniciar Sesión </Text>

                    </TouchableHighlight>

                    <TouchableHighlight onPress={ () => navigation.navigate('SignUp')} >
                        
                            <Text style = { styles.textNuevo }> Crear Nuevo Usuario </Text>

                    </TouchableHighlight>

                </View>
            </View>

        </View>
            
            
            


    
    
    );
}



export default LogIn;