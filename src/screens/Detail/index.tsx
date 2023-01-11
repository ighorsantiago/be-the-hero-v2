import { FontAwesome, Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import {
      DetailsContainer,
      Header,
      HeaderButton,
      HeaderButtonText,
      HeroDescription,
      HeroTitle,
      Incident,
      IncidentDescription,
      IncidentOng,
      IncidentValue,
      Contact,
      ContactButtons,
      WhatsappButton,
      WhatsappButtonText,
      EmailButtonText,
      EmailButton,
} from './styles'

// import logoImage from '../../assets/logo.png'

export function Detail({ navigation, route }) {
      // const navigation = useNavigation()
      // const route = useRoute()

      const incident = route.params.incident
      const messageToSend = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$ ${Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
      }).format(incident.value)}`

      function navigateBack() {
            navigation.goBack()
      }

      function sendEmail() {
            MailComposer.composeAsync({
                  subject: `Herói do caso: ${incident.title}`,
                  recipients: [incident.email],
                  body: messageToSend
            })
      }

      function sendWhatsapp() {
            Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${messageToSend}`)
      }

      return (
            <DetailsContainer>
                  <Header>
                        <Image source={require('../../assets/logo.png')} />

                        <HeaderButton onPress={navigateBack}>
                              <Feather name="arrow-left" size={28} color="#E02041" />
                              <HeaderButtonText>Voltar</HeaderButtonText>
                        </HeaderButton>
                  </Header>

                  <Incident>
                        <IncidentOng>
                              {incident.name} de {incident.city}/{incident.uf}
                        </IncidentOng>

                        <IncidentDescription>
                              {incident.description}
                        </IncidentDescription>

                        <IncidentValue>
                              {
                                    Intl.NumberFormat('pt-BR', {
                                          style: 'currency',
                                          currency: 'BRL'
                                    }
                                    ).format(incident.value)
                              }
                        </IncidentValue>
                  </Incident>

                  <Contact>
                        <HeroTitle>Salve o dia!</HeroTitle>
                        <HeroTitle>Seja o herói desse caso</HeroTitle>

                        <HeroDescription> Entre em contato:</HeroDescription>
                        <ContactButtons>
                              <WhatsappButton onPress={sendWhatsapp}>
                                    <FontAwesome name="whatsapp" size={32} color="#E9FAEF" />
                                    <WhatsappButtonText>Whatsapp</WhatsappButtonText>
                              </WhatsappButton>

                              <EmailButton onPress={sendEmail}>
                                    <FontAwesome name="envelope-o" size={30} color="#FBE8EC" />
                                    <EmailButtonText>E-mail</EmailButtonText>
                              </EmailButton>
                        </ContactButtons>
                  </Contact>
            </DetailsContainer>
      )
}