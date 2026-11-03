import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CurrencyCalculator from "./src/exercises/CurrencyCalculator";
import HeartRateLimits from "./src/exercises/HeartRateLimits";

export default function App() {
  const [activeTab, setActiveTab] = useState<"currency" | "hr">("currency");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuButton, activeTab === "currency" && styles.activeButton]}
          onPress={() => setActiveTab("currency")}
        >
          <Text style={[styles.menuText, activeTab === "currency" && styles.activeMenuText]}>
            💱 Currency
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuButton, activeTab === "hr" && styles.activeButton]}
          onPress={() => setActiveTab("hr")}
        >
          <Text style={[styles.menuText, activeTab === "hr" && styles.activeMenuText]}>
            ❤️ HR Limits
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentArea}>
        {activeTab === "currency" && <CurrencyCalculator />}
        {activeTab === "hr" && <HeartRateLimits />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  menuContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    justifyContent: "space-around",
  },
  menuButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#007AFF",
  },
  menuText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
  activeMenuText: {
    color: "#fff",
  },
  contentArea: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 12,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
});