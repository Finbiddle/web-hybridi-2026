import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CurrencyCalculator() {
  const [euros, setEuros] = useState<string>("");

  const eurAsNumber: number = !isNaN(Number(euros)) ? Number(euros) : 0;
  const pounds: number = eurAsNumber * 0.9;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Currency calculator</Text>
      
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
  container: {
    flex: 1,
    margin: 16,
  },
  heading: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginVertical: 16,
  },
});
