import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Fonts } from "../theme/Theme";
import { CustomButtonProps } from "../types/common";

const CustomButton = ({ onPress, children, style }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]} // 버튼 스타일
      onPress={onPress} // 클릭 시 실행할 함수
      activeOpacity={0.7} // 버튼 눌림 효과
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.darkGray,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
    borderColor: Colors.mediumGray,
    borderWidth: 2,
    shadowColor: Colors.white,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 6.5,
    elevation: 5,
  },
});

export default CustomButton;
