import * as React from 'react';
import { View , Text , Image, StyleSheet} from 'react-native';

export default function Information({ image, name, description }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <Text style={styles.description}>{description}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#0D60A5',
      alignItems: 'center',
      borderRadius: 20,
      margin: 5,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 20,
        margin: 2,
    },
    title: {
      //fontFamily: 'Roboto',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'
    },
    description: {
        //fontFamily: 'Roboto',
        fontSize: 15,
        textAlign: 'justify',
        color: 'white',
        margin: 10,
    },
  });


/*
import * as React from 'react';
import { View , Text} from 'react-native';


export default function Information({name}) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
*/