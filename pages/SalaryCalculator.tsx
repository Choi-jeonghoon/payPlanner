import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
} from "react-native";
import { Colors, Fonts } from "../theme/Theme";
import { useSalaryCalculator } from "../hooks/useSalaryCalculator";
import CustomButton from "../common/CustomButton";
import useDropdown from "../hooks/useDropdown";

const SalaryCalculator = () => {
  //계산 로직 관련
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

  //드롭다운 이벤트 관련
  const {
    buttonLayout,
    dropdownVisible,
    handleLayout,
    toggleDropdown,
    dropdownStyle,
  } = useDropdown();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>연봉 계산기</Text>
      <TextInput
        style={styles.input}
        placeholder="연봉을 입력하세요 (만원)"
        keyboardType="numeric"
        value={salary}
        onChangeText={setSalary}
        placeholderTextColor={Colors.accent}
      />

      <TouchableOpacity
        style={styles.dropdown}
        onPress={toggleDropdown}
        onLayout={handleLayout}
        activeOpacity={0.7}
      >
        <Text style={styles.dropdownText}>
          {taxRate ? `선택된 세율: ${taxRate}` : "세율 선택하기(선택 사항)"}
        </Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.dropdownMenu,
          {
            top: buttonLayout ? buttonLayout.y + buttonLayout.height : 0,
            borderColor: dropdownVisible ? Colors.lightGray : Colors.black,
          },
          dropdownStyle,
        ]}
      >
        {dropdownVisible && (
          <ScrollView>
            {taxRates.map((rate) => (
              <TouchableOpacity
                key={rate.value}
                style={styles.option}
                onPress={() => {
                  setTaxRate(rate.value);
                  toggleDropdown();
                }}
                activeOpacity={0.7}
              >
                <Text style={styles.optionText}>{rate.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </Animated.View>

      <CustomButton
        style={styles.calculateButton}
        onPress={calculateTakeHomePay}
      >
        <Text style={styles.calculateButtonText}>예상 금액 계산</Text>
      </CustomButton>

      {result !== null && (
        <Text style={styles.resultText}>
          연 실수령액: {result.toLocaleString()} 원
        </Text>
      )}
      {monthlyResult !== null && (
        <Text style={styles.resultText}>
          월 실수령액: {monthlyResult.toLocaleString()} 원
        </Text>
      )}
      {incomeTax !== null && (
        <Text style={styles.resultText}>
          연간 소득세: {incomeTax.toLocaleString()} 원
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
  dropdown: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    marginBottom: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignSelf: "center",
  },
  dropdownText: {
    color: Colors.white,
    textAlign: "center",
  },
  dropdownMenu: {
    width: "100%",
    borderWidth: 1,
    // borderColor: Colors.lightGray,
    marginTop: 5,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: Colors.darkGray,
    zIndex: 1,
    borderRadius: 5,
    overflow: "hidden", // 애니메이션 동안 내용이 넘치지 않도록 함
  },

  option: {
    padding: 15,
    alignItems: "center",
  },
  optionText: {
    color: Colors.white,
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

export default SalaryCalculator;
