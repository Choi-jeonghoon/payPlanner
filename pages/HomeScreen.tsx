import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Props } from "../types/navigation";

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Button
        title="연봉 계산기"
        onPress={() => navigation.navigate("SalaryCalculator")}
      />
      <Button
        title="월급 계산기"
        onPress={() => navigation.navigate("MonthlyCalculator")}
      />
      <Button
        title="퇴직금 계산기"
        onPress={() => navigation.navigate("RetirementCalculator")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});

export default HomeScreen;
