import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants'

export const DetailsContainer = styled.View`
      flex: 1;
      padding: 0 24px;
      padding-top: ${ Constants.statusBarHeight + 20 }px;
`;

export const Header = styled.View`
      flex-direction: row;
      
      justify-content: space-between;
      align-items: center;
`

export const HeaderButton = styled(TouchableOpacity)`
      flex-direction: row;
      
      align-items: center;
`;

export const HeaderButtonText = styled.Text`
      color: #555;
      font-weight: bold;
      margin-left: 10px;
`;

export const Incident = styled.View`
      padding: 24px;
      border-radius: 5px;
      background-color: #FFF;
      margin-top: 32px;
      margin-bottom: 16px;
`;

export const IncidentOng = styled.Text`
      font-size: 18px;
      font-weight: bold;
      color: #333;
`;

export const IncidentDescription = styled.Text`
      font-size: 14px;
      margin: 10px 0;
      color: #404040;
`;

export const IncidentValue = styled.Text`
      color: '#585858';
`;

export const Contact = styled.View`
      padding: 24px;
      border-radius: 5px;
      background-color: #FFF;
      margin-top: 30px;
      margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
      font-weight: bold;
      font-size: 18px;
      color: #444;
`;

export const HeroDescription = styled.Text`
      font-size: 16px;
      color: #444;
      margin: 15px 0;
`;

export const ContactButtons = styled.View`
      flex-direction: row;
      justify-content: space-between;
`;

export const ContactButtonText = styled.Text`
      font-weight: bold;
      margin-left: 10px;
`;

export const WhatsappButton = styled(TouchableOpacity)`
      width: 48%;
      height: 50px;
      border-radius: 5px;
      background-color: #25D366;
      flex-direction: row;
      justify-content: center;
      align-items: center;
`;

export const WhatsappButtonText = styled.Text`
      font-weight: bold;
      margin-left: 10px;
      color: #E9FAEF;
`;

export const EmailButton = styled(TouchableOpacity)`
      width: 48%;
      height: 50px;
      border-radius: 5px;
      background-color: #E02041;
      flex-direction: row;
      justify-content: center;
      align-items: center;
`;

export const EmailButtonText = styled.Text`
      font-weight: bold;
      margin-left: 10px;
      color: #FBE8EC;
`;
