import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HeartRateLimits() {
  const [age, setAge] = useState<string>("");

  const ageAsNumber: number = !isNaN(Number(age)) && age.trim() !== "" ? Number(age) : 0;
  const lowerLimit: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.65 : 0;
  const upperLimit: number = ageAsNumber > 0 ? (220 - ageAsNumber) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits</Text>

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
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { fontSize: 18, borderBottomWidth: 1, borderBottomColor: "#ccc", paddingVertical: 8, marginBottom: 20 },
  resultText: { fontSize: 16, marginVertical: 4 },
});