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

  const todos = useQuery(api.todos.getTodos);

  const isLoading = todos === undefined;

  if (isLoading) return <LoadingSpinner />


  return (
    <LinearGradient colors={colors.gradients.background} style={homestyles.container}>

      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homestyles.safeArea}>
        <Header />
        <TodoInput />
        
        {
          todos?.map(todo => (
            <Text key={todo._id} style={homestyles.todoText}>{todo.text}</Text>
          ))
        }

      </SafeAreaView>
    </LinearGradient>
  );
}


