import { useState } from "react";
import { Animated, LayoutChangeEvent } from "react-native";

interface ButtonLayout {
  x: number;
  y: number;
  height: number;
}

const useDropdown = () => {
  const [buttonLayout, setButtonLayout] = useState<ButtonLayout | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownHeight = useState(new Animated.Value(0))[0];

  const handleLayout = (event: LayoutChangeEvent) => {
    const { x, y, height } = event.nativeEvent.layout;
    setButtonLayout({ x, y, height });
  };

  const toggleDropdown = () => {
    if (dropdownVisible) {
      Animated.timing(dropdownHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setDropdownVisible(false));
    } else {
      setDropdownVisible(true);
      Animated.timing(dropdownHeight, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const dropdownStyle = {
    height: dropdownHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 250], // 원하는 최대 높이 설정
    }),
  };

  return {
    buttonLayout,
    dropdownVisible,
    dropdownHeight,
    handleLayout,
    toggleDropdown,
    dropdownStyle,
    setDropdownVisible,
  };
};

export default useDropdown;
