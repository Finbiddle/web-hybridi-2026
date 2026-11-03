import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HeartRateLimits({ onBack }: { onBack: () => void }) {
  const [age, setAge] = useState<string>("");

  const ageAsNumber: number = !isNaN(Number(age)) && age.trim() !== "" ? Number(age) : 0;
  const lowerLimit: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.65 : 0;
  const upperLimit: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.85 : 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button title="← Takaisin valikkoon" onPress={onBack} />
        <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
        <Text style={styles.label}>Enter your age:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={age}
          onChangeText={setAge}
          placeholder="e.g. 20"
        />
        <Text style={styles.resultText}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
        <Text style={styles.resultText}>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, margin: 16 },
  heading: { fontSize: 22, fontWeight: "bold", marginTop: 16, marginBottom: 24 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { fontSize: 18, borderBottomWidth: 1, borderBottomColor: "#ccc", paddingVertical: 8, marginBottom: 24 },
  resultText: { fontSize: 16, marginVertical: 4 },
});