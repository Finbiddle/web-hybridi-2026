import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CurrencyCalculator() {
  const [euros, setEuros] = useState<string>("");

  const eurAsNumber: number = !isNaN(Number(euros)) ? Number(euros) : 0;
  const pounds: number = eurAsNumber * 0.9;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Currency Calculator</Text>

      <Text style={styles.label}>Enter euros:</Text>
      <TextInput
        style={styles.input}
        placeholder="€"
        keyboardType="number-pad"
        value={euros}
        onChangeText={setEuros}
      />

      <Text style={styles.text}>{pounds.toFixed(2)} £</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { fontSize: 18, borderBottomWidth: 1, borderBottomColor: "#ccc", paddingVertical: 8, marginBottom: 16 },
  text: { fontSize: 18, marginVertical: 16 },
});