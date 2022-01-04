import apiParams from '../config.js';
import axios from 'axios';
import * as React from 'react';
import { View , ActivityIndicator , FlatList , StyleSheet} from 'react-native';
import CharacterCard from './CharacterCard';
import { useState , useEffect } from 'react';
import { Searchbar , DefaultTheme } from 'react-native-paper';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => setData(response.data.data.results))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function searchCharacter() {
    if(search) {
      setLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          nameStartsWith: search
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }

  return (
    <View style={styles.bk}>
      {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <View>
            <Searchbar
            placeholder="Search for character..."
            onChangeText={value => setSearch(value)}
            value={search}
            onIconPress={searchCharacter}
            onSubmitEditing={searchCharacter}
            theme = {theme}
            style={styles.searchBar}
            />
            <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard 
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                name={item.name} />
            )}
            />
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
     margin: 5,
  },
    bk: {
       backgroundColor: '#0D60A5',
    }
})

const theme = {
  ...DefaultTheme,
  colors: {
    text: '#0D60A5',
  },
  fonts: 'medium',
  dark: true,
  roundness: 50
};

/*
import * as React from 'react';
import { View } from 'react-native';
import CharacterCard from './CharacterCard';

export default function Home() {
  return (
    <View>
      <CharacterCard image={require('../assets/favicon.png')} name='Iron Man' />
      <CharacterCard image={require('../assets/favicon.png')} name='Captain America' />
    </View>
  );
}
*/