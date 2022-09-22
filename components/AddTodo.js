import { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";

export default function AddTodo( {addItemHandler} ) {
  const [todoText, setTodoText] = useState("");

  const changeHandler = (val) => {
    setTodoText(val);
  };

  return (
    <View>
      <TextInput
      style={styles.inputStyle}
        placeholder="type your todo..."
        onChangeText={(val) => changeHandler(val)}
      />
      <Button title="Add Item" color="coral" onPress={ () => addItemHandler(todoText)} />
    </View>
  );
}

const styles = StyleSheet.create({
    inputStyle: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        paddingHorizontal: 8,
        paddingVertical: 6,
    }
    
})
