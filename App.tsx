import React, { useState } from "react";
import { Alert, ScrollView, FlatList, Button, Text, TextInput, View, Image, StyleSheet } from "react-native";

export default function App() {
  const [inputData, setInputData] = useState("");
  // const [number, setNumber] = useState(0);
  const [name, setName] = useState([
    {
      nama: 'asep',
      id: '01',
      imageUrl: 'https://i.pinimg.com/236x/2c/04/9e/2c049e4bcf54ce099d3a85aebb950468.jpg',
    },
    {
      nama: 'udin',
      id: '02',
      imageUrl: 'https://i.pinimg.com/236x/8f/bf/e7/8fbfe7de8f97b5048524c3cd1be2bcb2.jpg',
      backgroundUrl: 'https://i.pinimg.com/236x/b8/9f/59/b89f592bcf1630f35ce0419acd1faa1d.jpg',

    },
    {
      nama: 'jamal',
      id: '03',
      imageUrl: 'https://i.pinimg.com/236x/a5/19/d8/a519d84282cd3ee4fdb76e308910db9a.jpg',
    },
    {
      nama: 'suep',
      id: '04',
      imageUrl: 'https://i.pinimg.com/236x/ac/c7/d0/acc7d038793a62d1020a2478bb8ab7dc.jpg',
    },
    {
      nama: 'bambang',
      id: '05',
      imageUrl: 'https://i.pinimg.com/736x/81/8b/7b/818b7b7185bf7c991cccb01183969058.jpg',
    },
    {
      nama: 'yanto',
      id: '06',
      imageUrl: 'https://i.pinimg.com/236x/9b/ac/29/9bac29e4c806734da4ad4d43d4c07379.jpg',
    },
  ]);
  const sendButton = () => {
    Alert.alert(inputData);
  };
  // const tambah = () => {
  //   setNumber(number + 1);
  // };
  // const kurang = () => {
  //   setNumber(number - 1);
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PARA HEWAN LANGKAH</Text>
      

      <Image 
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/236x/8b/4b/e4/8b4be4e33134a62b253fb6ba0bd35825.jpg',
        }}
      />
      <TextInput 
        style={styles.input}
        placeholder="Masukin"
        value={inputData}
        onChangeText={setInputData}
      />
      <View style={styles.buttonConten}>
        <Button title="Klik" onPress={sendButton} />
      </View>
      <FlatList
        numColumns={2}
        data={name}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <View style={styles.listItemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.listItemImage} />
            <Text style={styles.listItem}>{item.nama}</Text>
            
          <View style={styles.buttonContainer}>
            <Button title="Pilih" onPress={sendButton} />
          </View>

          {/* <View style={styles.counterContainer}>
            <View style={styles.counter}>
              <Button title="-" onPress={kurang} />
              <Text style={styles.counterText}>{number}</Text>
              <Button title="+" onPress={tambah} />
            </View>
          </View> */}
        </View>
        )}
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  title: {
    marginBottom: 30,
    fontSize: 30,  
    color: 'white',
    backgroundColor: '#1e90ff',
    width: 410,
    height: 70,
    textAlign: 'center',
    borderRadius: 5,
  },
  image: {
    width: 390,
    height: 270,
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '95%',
    marginBottom: 15,
  },
  buttonContainer: {
    marginBottom: 15,
  },
  buttonConten: {
    marginBottom: 15,
    width: 390,
  },
  // counterContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
  // counter: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: 100,
  // },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  listItemContainer: {
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 19,
  },
  listItemImage: {
    width: 130,
    height: 150,
    borderRadius: 20,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
});
