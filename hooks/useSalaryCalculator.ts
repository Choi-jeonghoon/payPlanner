import { useState } from "react";
import { Alert } from "react-native";

const taxRates = [
  { label: "X", value: "" },
  { label: "6%", value: "0.06" },
  { label: "15%", value: "0.15" },
  { label: "24%", value: "0.24" },
  { label: "35%", value: "0.35" },
  { label: "38%", value: "0.38" },
];

export const useSalaryCalculator = () => {
  const [salary, setSalary] = useState(""); //사용자 입력 연봉
  const [taxRate, setTaxRate] = useState(""); //선택된 세율
  const [result, setResult] = useState<number | null>(null); // 최종 연 실수령액 결과 (계산 후 저장)
  const [monthlyResult, setMonthlyResult] = useState<number | null>(null); // 최종 월 실수령액 결과 (계산 후 저장)
  const [incomeTax, setIncomeTax] = useState<number | null>(null); // 계산된 연간 소득세 (계산 후 저장)

  const getTaxRate = (annualSalary: number): number => {
    if (annualSalary <= 12000000) return 0.06;
    if (annualSalary <= 46000000) return 0.15;
    if (annualSalary <= 88000000) return 0.24;
    if (annualSalary <= 150000000) return 0.35;
    return 0.38;
  };

  const calculateTakeHomePay = () => {
    const annualSalary = parseFloat(salary) * 10000;

    if (!salary) {
      Alert.alert("연봉을 입력해 주세요!");
      return;
    }
    if (isNaN(annualSalary)) {
      Alert.alert("숫자만 입력해주세요!");
      return;
    }

    const taxPercentage = taxRate
      ? parseFloat(taxRate) / 100
      : getTaxRate(annualSalary);

    if (!isNaN(annualSalary) && !isNaN(taxPercentage)) {
      const annualIncomeTax = annualSalary * taxPercentage;
      const takeHomePay = annualSalary - annualIncomeTax;
      setResult(takeHomePay);
      setMonthlyResult(takeHomePay / 12);
      setIncomeTax(annualIncomeTax);
    } else {
      setResult(null);
      setMonthlyResult(null);
      setIncomeTax(null);
    }
  };

  return {
    salary,
    setSalary,
    taxRate,
    setTaxRate,
    result,
    monthlyResult,
    incomeTax,
    taxRates,
    calculateTakeHomePay,
  };
};
