import { Provider } from 'react-redux';
import Task1 from './src/tasks/Task1';
import { store } from './src/Redux/store';
import Task2 from './src/tasks/Task2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task4 from './src/tasks/Task4';

function MyStack(){
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
                <Stack.Navigator initialRouteName='InfoForm' screenOptions={{headerShown:false}}>
                    <Stack.Screen name='FindOddEven' component={Task1}/>
                    <Stack.Screen name='History' component={Task2}/>
                    <Stack.Screen name='InfoForm' component={Task4}/>
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function App(){

    return(
        <Provider store={store}>
          <MyStack/>  
        </Provider>
    );
}