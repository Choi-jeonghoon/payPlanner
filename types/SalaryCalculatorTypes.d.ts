import { LayoutChangeEvent } from "react-native";

export interface TaxRate {
  value: number;
  label: string;
}

export interface SalaryCalculatorProps {
  salary: string;
  setSalary: (value: string) => void;
  taxRate: number | null;
  setTaxRate: (value: number) => void;
  result: number | null;
  monthlyResult: number | null;
  incomeTax: number | null;
  taxRates: TaxRate[];
  calculateTakeHomePay: () => void;
  buttonLayout: { y: number; height: number } | null;
  dropdownVisible: boolean;
  handleLayout: (event: LayoutChangeEvent) => void;
  toggleDropdown: () => void;
  dropdownStyle: object;
}
