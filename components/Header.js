import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    padding: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
