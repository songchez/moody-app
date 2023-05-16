import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Container, Button, Icon, Text } from "native-base";
import BottomNavigation from "./BottomNavigation";

export default function Home() {
  const [inputText, setInputText] = useState("");

  return (
    <Container
      bg="primary.500"
      p="4"
      justifyContent="center"
      alignItems="center"
    >
      <TextInput
        multiline
        numberOfLines={8}
        style={styles.input}
        placeholder="일기를 쓰세요..."
        onChangeText={setInputText}
        value={inputText}
      />
      <Button
        style={styles.button}
        onPress={() => console.log("그림 그리기 시작")}
      >
        <Icon name="brush" />
        <Text style={styles.buttonText}>그림 그리기</Text>
      </Button>
      <BottomNavigation />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  button: {
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "#2980b9",
  },
  buttonText: {
    color: "#fff",
  },
});
