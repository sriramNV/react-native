import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'


const Header = () => {

    const {colors} = useTheme();
    const homestyles = createHomeStyles(colors);
    
    const todos = useQuery(api.todos.getTodos);

    const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const totalTodos = todos ? todos.length : 0;
    const progressPercentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;


  return (
    <View style={homestyles.header}>
        <View style={homestyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={homestyles.iconContainer}>
                <Ionicons name='flash-outline' size={28} color={'#fff'} />
            </LinearGradient>
            
            <View style={homestyles.titleTextContainer}>
                <Text style={homestyles.title}>
                    Today&apos;s Tasks 
                </Text>
                <Text style={homestyles.subtitle}>
                    {completedTodos} of {totalTodos} completed
                </Text>
            </View>
        </View>
        {totalTodos > 0 &&(
            <View style={homestyles.progressContainer}>
                <View style={homestyles.progressBarContainer}>
                    <View style={homestyles.progressBar}>
                        <LinearGradient
                            colors={colors.gradients.success}
                            style={[homestyles.progressFill, {width: `${progressPercentage}%`}]}
                        />
                    </View>
                    <Text style={homestyles.progressText}>
                        {Math.round(progressPercentage)}%
                    </Text>
                </View>
            </View>
        )}
    </View>
  );
}; 

export default Header