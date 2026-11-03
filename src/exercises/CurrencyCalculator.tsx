import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CurrencyCalculator({ onBack }: { onBack: () => void }) {
  const [euros, setEuros] = useState<string>("");

  const eurAsNumber: number = !isNaN(Number(euros)) ? Number(euros) : 0;
  const pounds: number = eurAsNumber * 0.9;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button title="← Takaisin valikkoon" onPress={onBack} />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, margin: 16 },
  heading: { fontSize: 24, marginTop: 16, marginBottom: 16 },
  input: { fontSize: 18, borderBottomWidth: 1, borderBottomColor: "#ccc", paddingVertical: 8, marginBottom: 16 },
  text: { fontSize: 18, marginVertical: 16 },
});