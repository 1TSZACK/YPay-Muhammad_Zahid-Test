import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { insertHistory } from '../Redux/Actions/oddevenHistoryAction';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Task1({ navigation, route }) {
    const {name, age} = route.params;
    const [number, setNumber] = useState('');
    const [oddeven, setOddEven] = useState('-');
    const [joke, setJoke] = useState('');
    const [error,setError] = useState('');

    const data = useSelector((state) => state.oddeven);
    const dispatch = useDispatch();

    function Task3GetJoke(){
        axios.get('https://official-joke-api.appspot.com/random_joke').
        then(
            response => { 
                setJoke(response.data.setup + '\n' + response.data.punchline); 
            }
        ).catch(
            error => {
                setError(error);
            }
        );
    }

    const onPress = () => {
        Task3GetJoke();

        if ( parseInt(number) % 2 == 0 ) {
            setOddEven('Even');
            // Implementation for Task 5 Performance if the number already exists in the history then it will not be stored in the history
            if(!data.some( obj => obj.number === parseInt(number) ) ){
                dispatch(insertHistory(parseInt(number), 'Even'));
            }
        }
        else {
            setOddEven('Odd');
            // Implementation for Task 5 Performance if the number already exists in the history then it will not be stored in the history
            if(!data.some( obj => obj.number === parseInt(number) ) ){
                dispatch(insertHistory(parseInt(number), 'Even'));
            }
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome {name+'\nAge: '+age}</Text>
            <Text style={styles.title}>Odd/Zven</Text>

            <TextInput keyboardType='numeric' value={number} onChangeText={(e) => { setNumber(e.replace(/[^0-9]/g, '')); }} style={styles.input} placeholder='Enter Number' placeholderTextColor={'white'} place></TextInput>
            
            <Text style={[styles.text, { marginBottom: 20 }]}>{'Entered Number is: ' + oddeven}</Text>
            
            <TouchableOpacity onPress={() => { onPress(); }}>
                <View style={styles.button}>
                    <Text style={styles.text}>Check</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.push('History') }}>
                <Text style={[styles.text, { textDecorationLine: 'underline', marginTop: 20, marginBottom: 20,textDecorationColor: 'white' }]}>History</Text>
            </TouchableOpacity>
            
            {error==''?
                <Text style={styles.text}>{joke}</Text>:
                <Text style={[styles.text,{color:'red'}]}>{error}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04638B',
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: '600',
        marginBottom: 50
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'white'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13.3,
        backgroundColor: '#32EBDB',
        width: screenWidth * 0.4,
        height: screenHeight * 0.05
    }
});

export default Task1;