import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import {useState} from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Task4({navigation}){
    const [name,setName] = useState('');
    const [error,setError] = useState('');
    const [age,setAge] = useState('');

    const onPress= () =>{
        if(name==''||age=='')
        {
            setError('Please fill the above field!')
        }
        else{
            navigation.replace('FindOddEven',{name:name,age:age})
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Enter Information</Text>
            <TextInput value={name} onChangeText={(n)=>{ setName(n.replace(/[^a-zA-Z\s]/g, '')); } } style={styles.input} placeholder='Enter Name' placeholderTextColor={'white'}></TextInput>
            <Text style={styles.error}>{name==''?error:''}</Text>
            <TextInput keyboardType='numeric' value={age} onChangeText={(a)=>{ setAge(a.replace(/[^0-9]/g, '')); } } style={styles.input} placeholder='Enter Age' placeholderTextColor={'white'}></TextInput>
            <Text style={styles.error}>{age==''?error:''}</Text>
            <TouchableOpacity onPress={()=>{ onPress(); }}>
                <View style={styles.button}>
                    <Text style={styles.text}>Submit</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


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
        marginBottom: 50,
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    error: {
        fontSize: 18,
        color: 'red',
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        // marginBottom: 10,
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

export default Task4;