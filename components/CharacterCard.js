import * as React from 'react';
import { StyleSheet , Text, View,  Image , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CharacterCard({image, name,id}) {
	const navigation = useNavigation();
  return (
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail' , {id})}
	>
			<Image 
				style={styles.image}
				source={{uri: image}}

			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '80%',
      alignSelf: 'center',
      backgroundColor: '#7CC8EB',
      alignItems: 'center',
      //justifySelf: 'center',
      flexDirection: 'row',
      //borderColor: '#0D60A5',  
      borderRadius: 50,
      //borderWidth: 2,
      margin: 5,
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50,
        borderWidth: 2,
    },
    font: {
        marginLeft: 5,
        //fontFamily: 'Roboto',
        //fontSize: '1rem',
        fontWeight: 'bold',
        textAlign: 'center',
    }
  });
