import React from "react";
import { View, Text, TextInput, StyleSheet, Switch } from "react-native";
import { Colors, Fonts } from "../../theme/Theme";
import CustomButton from "../../common/CustomButton";

interface MonthlyCalculatorProps {
  hourlyWage: string;
  setHourlyWage: (value: string) => void;
  workDays: string;
  setWorkDays: (value: string) => void;
  dailyHours: string;
  setDailyHours: (value: string) => void;
  isShortTerm: boolean;
  setIsShortTerm: (value: boolean) => void;
  totalSalary: number | null;
  dailySalary: number | null;
  formatCurrency: (value: string) => string;
  handleCalculate: () => void;
}

const MonthlyCalculator = ({
  hourlyWage,
  setHourlyWage,
  workDays,
  setWorkDays,
  dailyHours,
  setDailyHours,
  isShortTerm,
  setIsShortTerm,
  totalSalary,
  dailySalary,
  formatCurrency,
  handleCalculate,
}: MonthlyCalculatorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>월급 계산기</Text>
      <TextInput
        style={styles.input}
        placeholder="시급을 입력하세요.(원 단위)"
        keyboardType="numeric"
        placeholderTextColor={Colors.accent}
        value={formatCurrency(hourlyWage)}
        onChangeText={setHourlyWage}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>단기 근무</Text>
        <View style={styles.switchWrapper}>
          <Switch
            value={isShortTerm}
            onValueChange={setIsShortTerm}
            trackColor={{ true: Colors.success }}
          />
        </View>
      </View>

      {isShortTerm && (
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.inputHalf]}
            placeholder="근무 일수"
            keyboardType="numeric"
            placeholderTextColor={Colors.accent}
            value={workDays}
            onChangeText={setWorkDays}
          />
          <TextInput
            style={[styles.input, styles.inputHalf]}
            placeholder="근무 시간"
            keyboardType="numeric"
            placeholderTextColor={Colors.accent}
            value={dailyHours}
            onChangeText={setDailyHours}
          />
        </View>
      )}

      <CustomButton style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.calculateButtonText}>월급 계산</Text>
      </CustomButton>

      {totalSalary !== null && !isShortTerm && (
        <Text style={styles.resultText}>
          총 월급(실수령 금액): {formatCurrency(totalSalary.toString())} 원
        </Text>
      )}

      {isShortTerm && dailySalary !== null && (
        <Text style={styles.resultText}>
          일급(실수령 금액): {formatCurrency(dailySalary.toString())}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 30,
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    marginBottom: 12,
    paddingVertical: 8,
    width: "100%",
    color: Colors.white,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  inputHalf: {
    flex: 1,
    marginRight: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  switchLabel: {
    color: Colors.white,
    fontSize: Fonts.textLarge,
    fontWeight: Fonts.bold,
    marginRight: 10,
  },
  switchWrapper: {
    transform: [{ scale: 1.0 }],
  },
  calculateButton: {
    backgroundColor: Colors.darkGray,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
  },
  calculateButtonText: {
    color: Colors.white,
    fontSize: Fonts.textLarge,
  },
  resultText: {
    color: Colors.white,
    fontSize: Fonts.textMedium,
    marginVertical: 5,
  },
});

export default MonthlyCalculator;
