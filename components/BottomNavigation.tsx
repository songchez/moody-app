import { Box, Center, HStack, Icon, Pressable, Text } from "native-base";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function BottomNavigation() {
  const [selected, setSelected] = useState(1);
  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      maxW="300px"
      alignSelf="center"
    >
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon mb="1" as={FontAwesome} name="home" color="white" size="sm" />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon mb="1" as={FontAwesome} name="home" color="white" size="sm" />
            <Text color="white" fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon mb="1" as={FontAwesome} name="home" color="white" size="sm" />
            <Text color="white" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}
