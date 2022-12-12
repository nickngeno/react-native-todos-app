import React, { useState } from "react";
import { TextInput, Text, View, Button, StyleSheet } from "react-native";

const Input = ({ addHandler }) => {
  const [task, setTask] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Add new task"
        value={task}
        style={styles.input}
        onChangeText={(e) => setTask(e)}
      />
      <Button
        title="Add"
        color='coral'
        style={styles.button}
        onPress={() => addHandler(task)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
  },
  input: {
    backgroundColor: "#bbbb",
    width: 300,
    marginTop: 20,
    marginHorizontal: 50,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
});

export default Input;
