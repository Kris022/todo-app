import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddTodo from "./components/addTodo";

// backgroundColor: "#666e73",

export default function App() {
  const [todo, setTodo] = useState([
    { text: "buy coffe", key: "1" },
    { text: "create app", key: "2" },
    { text: "learn ML", key: "3" },
    { text: "Research Dissertation", key: "4" },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.key != key));
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <Header />
      <View style={styles.content}>
        <AddTodo />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
