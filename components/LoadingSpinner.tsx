import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient';
import { createHomeStyles } from '@/assets/styles/home.styles';

const LoadingSpinner = () => {

    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
        <View style={homeStyles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={homeStyles.loadingText}>Loading your Todos ..........</Text>
        </View>
    </LinearGradient>
  )
}
