import React, { useState } from "react";
import Home from "./src/exercises/Home";
import CurrencyCalculator from "./src/exercises/CurrencyCalculator";
import HeartRateLimits from "./src/exercises/HeartRateLimits";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"home" | "currency" | "hr">("home");

  if (currentScreen === "currency") {
    return <CurrencyCalculator onBack={() => setCurrentScreen("home")} />;
  }

  if (currentScreen === "hr") {
    return <HeartRateLimits onBack={() => setCurrentScreen("home")} />;
  }

  return <Home onSelect={(screen) => setCurrentScreen(screen)} />;
}
