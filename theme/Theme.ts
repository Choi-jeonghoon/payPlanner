const Colors = {
  black: "#121212",
  darkGray: "#1e1e1e", // 어두운 회색
  white: "#ffffff", // 흰색
  lightGray: "#ccc", // 연한 회색
  mediumGray: "#444", // 중간 회색
  accent: "#ff7e5f", // 강조 색상
  error: "#ff0000", // 오류 메시지 색상
  success: "#00ff00", // 성공 메시지 색상
} as const; // 'as const'를 사용하여 객체의 속성을 리터럴 타입으로 지정

const Fonts = {
  textSmall: 12, // 작은 텍스트 크기
  textMedium: 16, // 중간 텍스트 크기
  textLarge: 18, // 큰 텍스트 크기
  bold: "bold",
  semiBold: "600",
  regular: "normal",
} as const; // 'as const'를 사용하여 객체의 속성을 리터럴 타입으로 지정
export { Colors, Fonts };

//오타나 잘못된 타입을 방지
