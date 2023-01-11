import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants'

export const IncidentsContainer = styled.View`
    flex: 1;
    padding: 0 24px;
    padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const HeaderContainer = styled.View`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
`;

export const HeaderText = styled.Text`
      font-size: 15px;
      color: #737380;
`;


export const HeaderTextBold = styled.Text`
      font-weight: bold;
`;

export const MainTitle = styled.Text`
      font-size: 30px;
      margin-bottom: 16px;
      margin-top: 48px;
      color: #13131a;
      font-weight: bold;
`;

export const MainDescription = styled.Text`
      font-size: 16px;
      line-height: 24px;
      color: #737380;
`;

export const IncidentsList = styled(FlatList)`
      margin-top: 32px;
`;

export const Incident = styled.View`
      padding: 24px;
      border-radius: 5px;
      margin-bottom: 16px;
      background-color: #FFF;
`;

export const IncidentOng = styled.Text`
      font-size: 16px;
      font-weight: bold;
      color: #333;
`;

export const IncidentDescription = styled.Text`
      font-size: 14px;
      color: #404040;
      margin: 10px 0;
`;

export const IncidentValue = styled.Text`
      color: #585858;
      margin-bottom: 30px;
`;

export const IncidentButton = styled(TouchableOpacity)`
      flex-direction: row;
      align-items: center;
`;

export const IncidentButtonText = styled.Text`
      color: #E02041;
      font-weight: bold;
      margin-right: 10px;
`;
