import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Edit app/index.tsx to edit this screen1234.</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 58,
    }
});