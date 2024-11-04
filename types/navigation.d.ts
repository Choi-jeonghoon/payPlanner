import { StackNavigationProp } from "@react-navigation/stack";

// 스택 파라미터 리스트 정의
export type RootStackParamList = {
  Home: undefined;
  SalaryCalculator: undefined;
  MonthlyCalculator: undefined;
  RetirementCalculator: undefined;
};

// Home 스크린의 네비게이션 타입 정의
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export interface Props {
  navigation: HomeScreenNavigationProp;
}
