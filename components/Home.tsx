import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Container, Button, Icon, Text, Center } from "native-base";
import BottomNavigation from "./BottomNavigation";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
  const [inputText, setInputText] = useState("");

  return (
    <Container bg="white" p="4" justifyContent="center" alignItems="center">
      <TextInput
        multiline
        numberOfLines={8}
        style={styles.input}
        placeholder="일기를 쓰세요..."
        onChangeText={setInputText}
        value={inputText}
      />
      <Button
        bg="secondary.500"
        margin={3}
        shadow={3}
        onPress={() => console.log("그림 그리기 시작")}
      >
        <Center>
          <Icon as={FontAwesome} size="sm" name="paint-brush" color="white" />
          <Text style={styles.buttonText}>그리기</Text>
        </Center>
      </Button>
      <BottomNavigation />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
  },
});
