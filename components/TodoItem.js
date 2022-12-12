import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ item, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(item.key)}>
      <View style={styles.task}>
        <AntDesign name="delete" size={24} color="black" />
        <Text style={styles.taskItem}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: "pink",
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    padding: 20,
    fontSize: 15,
    flexDirection:"row"
  },
  taskItem: {
    paddingLeft:20
  },
});
export default TodoItem;
