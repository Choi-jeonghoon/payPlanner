import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import SalaryCalculator from "../pages/SalaryCalculator";
import { MonthlyCalculator } from "../pages/MonthlyCalculator";
import { RetirementCalculator } from "../pages/RetirementCalculator";
import { Colors, Fonts } from "../theme/Theme";

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.black, // 헤더 배경색을 다크 색상으로 설정
      },
      headerTintColor: Colors.white, // 타이틀 텍스트 색상 설정
      headerTitleStyle: {
        fontWeight: Fonts.bold, // 타이틀 텍스트 굵기 설정
      },
      cardStyle: {
        backgroundColor: Colors.black, // 모든 스크린의 배경색 설정
      },
    }}
  >
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
