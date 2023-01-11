import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { Image } from 'react-native'

// import api from '../../services/api'
import { incidents } from '../../utils/incidents';

import {
      IncidentsContainer,
      HeaderContainer,
      HeaderText,
      HeaderTextBold,
      MainTitle,
      MainDescription,
      IncidentsList,
      Incident,
      IncidentOng,
      IncidentDescription,
      IncidentValue,
      IncidentButton,
      IncidentButtonText,
} from './styles';

export function Incidents({ navigation }) {

      // const [incidents, setIncidents] = useState([])
      const [totalIncidents, setTotalIncidents] = useState(0)
      const [currentPage, setCurrentPage] = useState(1)
      const [loading, setLoading] = useState(false)

      function navigateToDetails(incident) {
            navigation.navigate('Detail', { incident })
      }

      async function loadIncidents() {
            if (loading) {
                  return
            }

            if (totalIncidents > 0 && incidents.length === totalIncidents) {
                  return
            }

            setLoading(true)

            // const response = await api.get('/incidents', {
            //       params: {
            //             page: currentPage
            //       }
            // })

            // setIncidents([...incidents, ...response.data])
            // setTotalIncidents(response.headers['X-Total-Count'])
            setTotalIncidents(incidents.length);
            
            // setCurrentPage(currentPage + 1)
            setLoading(false)
      }

      useEffect(() => {
            loadIncidents();
      }, [])

      return (
            <IncidentsContainer>
                  <HeaderContainer>
                        <Image source={require('../../assets/logo.png')} />
                        <HeaderText>
                              Total de <HeaderTextBold>{totalIncidents}</HeaderTextBold> casos
                        </HeaderText>
                  </HeaderContainer>
                  <MainTitle>Bem-vindo</MainTitle>
                  <MainDescription>Escolha um dos casos abaixo e salve o dia!</MainDescription>

                  <IncidentsList
                        data={incidents}
                        keyExtractor={incident => String(incident.id)}
                        showsVerticalScrollIndicator={false}
                        onEndReached={loadIncidents}
                        onEndReachedThreshold={0.2}
                        renderItem={({ item: incident }) => (

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
                                                }).format(incident.value)
                                          }
                                    </IncidentValue>

                                    <IncidentButton onPress={() => navigateToDetails(incident)}>
                                          <IncidentButtonText>Ver mais detalhes</IncidentButtonText>
                                          <Feather name="arrow-right" size={16} color="#E02041" />
                                    </IncidentButton>
                              </Incident>
                        )} />
            </IncidentsContainer>
      );
}