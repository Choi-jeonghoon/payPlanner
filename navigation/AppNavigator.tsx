import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import SalaryCalculator from "../pages/SalaryCalculator";
import { MonthlyCalculator } from "../pages/MonthlyCalculator";
import { RetirementCalculator } from "../pages/RetirementCalculator";

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Pay Planner" }}
    />
    <Stack.Screen
      name="SalaryCalculator"
      component={SalaryCalculator}
      options={{ title: "연봉 계산기" }}
    />
    <Stack.Screen
      name="MonthlyCalculator"
      component={MonthlyCalculator}
      options={{ title: "월급 계산기" }}
    />
    <Stack.Screen
      name="RetirementCalculator"
      component={RetirementCalculator}
      options={{ title: "퇴직금 계산기" }}
    />
  </Stack.Navigator>
);
