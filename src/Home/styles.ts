import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #2c3333;
  align-items: center;
`;

export const NumberButton = styled.TouchableOpacity`
  width: ${RFPercentage(12)}px;
  height: ${RFPercentage(12)}px;
  background-color: #2e4f4f;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: ${RFValue(2)}px;
`;

export const ACButton = styled.TouchableOpacity`
  width: ${RFPercentage(12)}px;
  height: ${RFPercentage(12)}px;
  background-color: #2e4faf;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: ${RFValue(2)}px;
`;

export const OperationButton = styled.TouchableOpacity`
  width: ${RFPercentage(12)}px;
  height: ${RFPercentage(12)}px;
  background-color: #3e4f4f;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: ${RFValue(2)}px;
`;

export const EqualButton = styled.TouchableOpacity`
  width: ${RFPercentage(12)}px;
  height: ${RFPercentage(12)}px;
  background-color: #2e2e4f;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: ${RFValue(2)}px;
`;

export const ButtonLabel = styled.Text`
  color: #cbe4de;
`;

export const Grid = styled.View`
  align-items: space-between;
  justify-content: space-between;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const GridLine = styled.View`
  align-items: space-between;
  justify-content: space-between;
  flex-direction: row;
`;

export const MemoryText = styled.Text`
  color: #cbe4de;
  font-size: 32px;
`;

export const InputText = styled.Text`
  color: #cbe4de;
  font-size: 48px;
`;

export const Header = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
