import React from "react";
import { StyleSheet, View } from "react-native";
import MonthlyCalculator from "../components/MonthlyCalculator/MonthlyCalculator";
import useMonthlyCalculator from "../hooks/useMonthlyCalculator";

const MonthlyCalculatorPage = () => {
  const {
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
  } = useMonthlyCalculator();

  return (
    <View style={styles.container}>
      <MonthlyCalculator
        hourlyWage={hourlyWage}
        setHourlyWage={setHourlyWage}
        workDays={workDays}
        setWorkDays={setWorkDays}
        dailyHours={dailyHours}
        setDailyHours={setDailyHours}
        isShortTerm={isShortTerm}
        setIsShortTerm={setIsShortTerm}
        totalSalary={totalSalary}
        dailySalary={dailySalary}
        formatCurrency={formatCurrency}
        handleCalculate={handleCalculate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MonthlyCalculatorPage;
