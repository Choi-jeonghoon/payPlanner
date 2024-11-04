import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Props } from "../types/navigation";
import CustomButton from "../common/CustomButton";
import { Colors, Fonts } from "../theme/Theme";

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <CustomButton onPress={() => navigation.navigate("SalaryCalculator")}>
        <Text style={styles.buttonText}>연봉 계산기</Text>
      </CustomButton>

      <CustomButton onPress={() => navigation.navigate("MonthlyCalculator")}>
        <Text style={styles.buttonText}>월급 계산기</Text>
      </CustomButton>

      <CustomButton onPress={() => navigation.navigate("RetirementCalculator")}>
        <Text style={styles.buttonText}>퇴직금 계산기</Text>
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: Fonts.textLarge,
    fontWeight: Fonts.bold,
  },
});

export default HomeScreen;
