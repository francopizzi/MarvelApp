import * as React from 'react';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createStackNavigator  , screen} from '@react-navigation/stack';
import Home from './components/Home'
import Detail from './components/Detail';


const Stack = createStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = '#7CC8EB';

export default function App() {
  return (
    <NavigationContainer theme={navTheme} >
      <Stack.Navigator screenOptions={{
        cardStyle: { backgroundColor: '#0D60A5' }
        }}>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#E51F31",
          } ,
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
        />
        <Stack.Screen name="Detail" component={Detail} 
        options={{
          title: "Detail",
          headerStyle: {
            backgroundColor: "#E51F31",
          } ,
          headerTintColor: "white",
          headerTitleAlign: "center",
          cardStyle: {
            backgroundColor: "#0D60A5",
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import { publicKey, privateKey } from '@env';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Marvel App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/