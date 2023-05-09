import { View, Text, Button, Alert } from "react-native";
import React from "react";

export default function Cusbutton() {
  return (
    <View>
      <Button
        title="커스텀버튼"
        onPress={() => Alert.alert("버튼을 눌렀습니다.")}
      />
    </View>
  );
}
