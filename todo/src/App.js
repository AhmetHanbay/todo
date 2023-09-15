import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "./components/Header";
import ToDoCard from "./components/ToDoCard";
import SaveCard from "./components/SaveCard";

const App = () => {
  const [list, setList] = useState([
    'El Yüz Yıkanacak',
    'Diş Fırçalanacak',
    'Kıyafetler Giyilecek',
    'Kahvaltı Yapılacak',
    'Kahve Alnacak',
    'Çöpler Atılacak',
    'Durağa Yetişilecek'
  ]);

  const [text, setText] = useState("");

  const handleAddTodoPress = () => {
    setList([...list, text]);
    setText("");
  };

  const handleDeleteTodoPress = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const [isFocus, setFocus] = useState(false);

  const handleTodoDone = () => {
    setFocus(!isFocus);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
          <Text style={styles.count}>{list.length}</Text>
        </View>
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <ToDoCard
              text={item}
              deleteTodo={() => handleDeleteTodoPress(index)}
              todoDone={() => handleTodoDone()}
            />
          )}
        />
        <SaveCard
          value={text}
          onChangeText={setText}
          onPress={handleAddTodoPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#102027",
  },
  container: {
    flex: 1,
    margin: 10,
    marginTop: 40,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  count: {
    fontSize: 30,
    fontWeight: "700",
    color: "orange",
  },
});