import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Link } from "expo-router";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";

export default function Index() {

  const { toggleDarkMode, colors } = useTheme();
  const homestyles = createHomeStyles(colors);


  return (
    <LinearGradient colors={colors.gradients.background} style={homestyles.container}>

      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homestyles.safeArea}>
        <Header />
        <TodoInput />
        <Text style={homestyles.todoText}>Edit app/index.tsx to edit this screen1234.</Text>
        <Text style={homestyles.todoText}>Hello</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text style={homestyles.todoText}>Toggle the mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}


