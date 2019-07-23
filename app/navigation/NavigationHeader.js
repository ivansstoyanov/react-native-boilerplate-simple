import React from "react";
import { Header } from "react-navigation";
import { View, Platform } from "react-native";
//import LinearGradient from "react-native-linear-gradient";

const NavigationHeader = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
        <Header {...props} />
    </View>
  );
};

export default NavigationHeader;