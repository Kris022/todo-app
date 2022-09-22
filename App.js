import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddTodo from "./components/AddTodo";

import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// backgroundColor: "#666e73",

export default function App() {
  const [todoKey, setTodoKey] = useState(5);

  const [todo, setTodo] = useState([
    { text: "buy coffe", key: "1" },
    { text: "create app", key: "2" },
    { text: "learn ML", key: "3" },
    { text: "Research Dissertation", key: "4" },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.key != key));
  };

  const submitHandler = (txt) => {
    // use random value + timestamp
    if (txt.length > 2) {
      setTodo((prevTodo) => {
        return [{ text: txt, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("Opps!", "Todo must be over 2 chars long...", [
        { text: "Ok", onPress: () => console.log("closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar />

        <Header />
        <View style={styles.content}>
          <AddTodo addItemHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  list: {
    marginTop: 20,
    flex: 1,
    padding: 5,
  },
});
