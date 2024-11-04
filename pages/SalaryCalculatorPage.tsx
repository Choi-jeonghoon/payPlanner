import React from "react";
import { View, StyleSheet } from "react-native";
import SalaryCalculator from "../components/SalaryCalculator/SalaryCalculator";
import { Colors } from "../theme/Theme";
import { useSalaryCalculator } from "../hooks/useSalaryCalculator";
import useDropdown from "../hooks/useDropdown";

const SalaryCalculatorPage = () => {
  // 계산 로직 관련
  const {
    salary,
    setSalary,
    taxRate,
    setTaxRate,
    result,
    monthlyResult,
    incomeTax,
    taxRates,
    calculateTakeHomePay,
  } = useSalaryCalculator();

  // 드롭다운 이벤트 관련
  const {
    buttonLayout,
    dropdownVisible,
    handleLayout,
    toggleDropdown,
    dropdownStyle,
  } = useDropdown();

  return (
    <View style={styles.container}>
      <SalaryCalculator
        salary={salary}
        setSalary={setSalary}
        taxRate={taxRate}
        setTaxRate={setTaxRate}
        result={result}
        monthlyResult={monthlyResult}
        incomeTax={incomeTax}
        taxRates={taxRates}
        calculateTakeHomePay={calculateTakeHomePay}
        buttonLayout={buttonLayout}
        dropdownVisible={dropdownVisible}
        handleLayout={handleLayout}
        toggleDropdown={toggleDropdown}
        dropdownStyle={dropdownStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 20,
  },
});

export default SalaryCalculatorPage;
