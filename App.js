import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// backgroundColor: "#666e73",

export default function App() {
  const [people, setPeople] = useState([
    { name: "Kris", key: 9 },
    { name: "Mike", key: 1 },
    { name: "Rose", key: 2 },
    { name: "Marek", key: 3 },
    { name: "Per", key: 4 },
    { name: "Ver", key: 5 },
    { name: "Ham", key: 6 },
    { name: "Lec", key: 7 },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>
        {people.map((person) => {
          return (
            <View key={person.key}>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          );
        })}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  baseText: {
    color: "#dedede",
    fontSize: 30,
  },
  item: {
    color: "#dedede",
    fontSize: 30,
    padding: 30,
    marginTop: 20,
    backgroundColor: "#4c7a6a",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
