import { ViewStyle } from "react-native";

export interface CustomButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  children: React.ReactNode;
}
