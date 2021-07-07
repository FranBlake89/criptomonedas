import React, { useState} from 'react';
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const SignUp = ({navigation}) => {

    const [ name, setName ] = useState ('')
    const [ user, setUser ] = useState ('')
    const [ pass, setPass ] = useState ('')

    const createNewUser = async () => {

        try{
            await firebaseService.createUser(name, user, pass)
            navigation.navigate('Main')
            setName('')
            setPass('')
            setUser('')            

        }catch (error){
            alert (error)
        }
    }

    return (
        <View style = { styles.fondo }>
            <ScrollView>
                <View style = { styles.formulario }>
                    <View>
                        <Text style = { styles.label }> Nombre y apellido: </Text>
                        <TextInput
                            style = { styles.Input }
                            placeholder = ' Carlos Hernández '
                            value = {name}
                            onChange = { (e) => setName(e.nativeEvent.text)}
                        />
                    </View>

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
                        <Text style = { styles.label }> Crea una contraseña: </Text>
                        <TextInput
                            style = { styles.Input }
                            placeholder = ' Contraseña '
                            value = {pass}
                            onChange = { (e) => setPass(e.nativeEvent.text)}
                        />
                    </View>

                    <TouchableHighlight  onPress={ createNewUser}
                    style = { styles.btnNuevoUsuario }>
                        
                            <Text style = { styles.textNuevoUsuario }> Crear nuevo Usuario </Text>

                    </TouchableHighlight>
                </View>
            </ScrollView>

        </View>
        
    );
};

export default SignUp;