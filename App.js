import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

let historia
let ratkaisu

export default function App() {

  const [sitem, setSitem] = useState ('');
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, { key: sitem}]);
    setSitem('')
  }
  const clearList = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={sitem => setSitem(sitem)} value={sitem}/>
      <View style={styles.buttonrow}>
        <View style={styles.button}>
      <Button onPress={addItem} title="ADD" />
      </View>
      <View style={styles.button}>
      <Button onPress={clearList} title="CLEAR" />
      </View>
      </View>
      <Text style={styles.title}>Shopping list</Text>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
      />
     
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 100
  },
  input : {
    width: 75 ,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button : {
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonrow : {
    flexDirection: 'row'
  },
  title: {
    color: '#0821F3',
    fontWeight: "bold"
  }
});  