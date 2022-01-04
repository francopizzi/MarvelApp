import * as React from 'react';
import { View, Text , Image , StyleSheet } from 'react-native';

export default function Comic({ name, image }) {
    return (
      <View style={styles.container}>
              <Image style={styles.image} source={{uri: image}} />
              <Text style={styles.title}>{name}</Text>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      width: 200,
      height: 300,
      backgroundColor: '#0D60A5',
      alignItems: 'center',
      borderRadius: 20,
      margin: 5,
    },
    image: {
      height: 250,
      width: 200,
      borderRadius: 20,
      margin: 2,
    },
    title: {
      //fontFamily: 'Roboto',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white', 
      margin: 5,
    },
  });

/*

export default function Comic({ name }) {
  return (
    <View>
			<Text>{name}</Text>
    </View>
  )
}
*/