import { useState } from "react";
import { Alert } from "react-native";

const useMonthlyCalculator = () => {
  const [hourlyWage, setHourlyWage] = useState<string>("");
  const [workDays, setWorkDays] = useState("");
  const [dailyHours, setDailyHours] = useState("");
  const [isShortTerm, setIsShortTerm] = useState(false);
  const [totalSalary, setTotalSalary] = useState<number | null>(null);
  const [dailySalary, setDailySalary] = useState<number | null>(null);

  const formatCurrency = (value: string): string => {
    if (!value) return "";
    const numberValue = parseInt(value.replace(/,/g, ""), 10);
    return isNaN(numberValue) ? "" : numberValue.toLocaleString("ko-KR");
  };

  const calculateSalary = (): number => {
    const wage = parseInt(hourlyWage.replace(/,/g, ""), 10); // 시급
    const days = isShortTerm ? (workDays ? parseInt(workDays) : 1) : 22; // 단기 근무 시 기본 1일로 계산
    const hours = isShortTerm ? (dailyHours ? parseInt(dailyHours) : 8) : 8; // 기본 8시간

    // wage가 NaN일 경우 처리
    if (isNaN(wage) || wage <= 0) {
      Alert.alert("유효한 시급을 입력해주세요");
      return 0; // 계산할 수 없으므로 0을 반환
    }

    const monthlySalary = wage * days * hours; // 월급 계산
    const tax = monthlySalary * 0.033; // 세금 계산 (3.3%)

    // 단기 근무일 경우 세금 적용 후 일급 계산
    const dailyWage = wage * hours; // 일급 계산
    const dailyTax = dailyWage * 0.033; // 일급에 대한 세금 계산
    const netDailySalary = Math.floor(dailyWage - dailyTax); // 세금 적용 후 일급

    setDailySalary(isShortTerm ? netDailySalary : null); // 단기 근무 시 일급 설정
    return Math.floor(monthlySalary - tax); // 세금 적용 후 월급 반환
  };

  const handleCalculate = () => {
    const salary = calculateSalary();
    setTotalSalary(salary); // 계산된 월급을 상태에 저장
  };

  return {
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
  };
};

export default useMonthlyCalculator;
