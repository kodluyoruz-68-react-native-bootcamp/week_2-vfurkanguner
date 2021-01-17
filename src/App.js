import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header, NoteList } from './components/';




/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.container} >
        <Header />
        <NoteList />
      </SafeAreaView>
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED"
  }
});