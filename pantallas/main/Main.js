import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Text, View, FlatList,TouchableHighlight} from 'react-native';
import firebaseService from '../../services/firebase';
import styles from './styles';


const ListaCripto = ({navigation}) => {

    const [userName, setUserName] = useState ('')
    
    const [data, setData] = React.useState([])

    useEffect(() => {
        (
            async () => {
                try {
                    const userData = await firebaseService.getUser()
                    setUserName ( userData )
        
                } catch (e) {
                    alert(e)
                }
            }
        )()
    }, [])
    
    const cerrarSesion = async () => {
        try {
            await firebaseService.signout
            navigation.navigate('Login')

        }catch(e){
            alert(e)
        }
    }

    axios({
        method: "GET",
        baseURL: 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD',

    })
    .then ((res) => setData (res.data.Data))
    .catch((err) => console.log(err));
    
    
        return (
            <>                  
                <View style = { styles.bienvenida }>

                    <TouchableHighlight style = { styles.close } onPress = { cerrarSesion }>                        
                            <Text style = { styles.textclose }> Cerrar sesión</Text>
                    </TouchableHighlight>

                    <View style = { styles.nombre }>
                        <Text style = { styles.labelForm }> Bienvenido </Text>
                        <Text style = {styles.textoForm}> {userName} </Text>
                    </View>

                    <View style = { styles.dinero }>
                        <Text style = { styles.simbolopeso }> $ </Text>
                        <Text style = {styles.pesos}> 0 </Text>
                    </View>

                </View>

                
                <FlatList 
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => 
                        <View style={styles.lista}>
                            <Text style = {styles.label}> {item.CoinInfo.FullName} </Text>                            
                            <Text style = {styles.texto}> {item.CoinInfo.Name} </Text>
                            <Text style = {styles.actualizacion}> {item.DISPLAY.USD.LASTUPDATE} </Text>

                            <View style = {styles.subLista}>
                                <Text style = {styles.subLabel}> Precio (USD) </Text> 
                                <Text style = {styles.subTexto}> {item.DISPLAY.USD.PRICE} </Text>
                                <Text style = {styles.subLabel}> Var. 24 Hrs </Text> 
                                <Text style = {styles.subTexto}> {item.DISPLAY.USD.CHANGEPCT24HOUR} </Text>
                                    
                                
                            </View>
                        </View>
                    }            
                />
              
            </>
        )


};
    

export default ListaCripto ;