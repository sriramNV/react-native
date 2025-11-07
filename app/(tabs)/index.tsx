import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { toggleDarkMode, colors } = useTheme();
  const styles = createHomeStyles(colors);


  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>Edit app/index.tsx to edit this screen1234.</Text>
      <Text>Hello</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
      
    </View>
  );
}


