import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

interface HomeProps {
  onSelect: (screen: "currency" | "hr") => void;
}

export default function Home({ onSelect }: HomeProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.heading}>Choose app</Text>

        <TouchableOpacity style={styles.button} onPress={() => onSelect("currency")}>
          <Text style={styles.buttonText}>DEMO: Currency Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onSelect("hr")}>
          <Text style={styles.buttonText}>WEEK 1:Heart Rate Limits</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, padding: 20, justifyContent: "center" },
  heading: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 40 },
  button: { backgroundColor: "#007AFF", paddingVertical: 16, paddingHorizontal: 24, borderRadius: 12, marginBottom: 16, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});