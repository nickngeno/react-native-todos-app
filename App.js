import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [tasks, setTasks] = useState([
    { name: "Wake up", key: 1 },
    { name: "Have breakfast", key: 2 },
    { name: "Finish remaining work", key: 3 },
    { name: "Go run", key: 4 },
    { name: "Watch Wednesday Episode", key: 5 },
    { name: "Go buy supper", key: 6 },
  ]);

  const onPressHandler = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => task.key != id);
    });
  };

  const keyGenerator = (key) => {
    const keys = [];
    tasks.forEach((task) => keys.push(task.key));
  
    console.log("keys" + keys)
    console.log("key" + key)
    if (keys.indexOf(key) != -1) {
      console.log("Duplicate key found!generating another one");
      keyGenerator(key + 3);
    } else {
      return key;
    }
  };
  const addHandler = (task) => {
    console.log(task);
    if (task.length < 3) {
      Alert.alert("OOPS!", "Task should not be less that 3 chars!", [
        { text: "Ok" },
      ]);
    } else {
      setTasks((prev) => {
        return [{ name: task, key: keyGenerator(Math.floor(Math.random() * 100)) }, ...prev];
      });
    }
  };
  console.log(tasks);
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.inputContainer}>
          <Input addHandler={addHandler} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TodoItem item={item} onPressHandler={onPressHandler} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    // paddingHorizontal: 20,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginHorizontal: 10,
  },
});
