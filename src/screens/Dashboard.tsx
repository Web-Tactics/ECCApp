import React from 'react'
import Background from '../components/Background'
import LogoSm from '../components/LogoSm'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import ContactListScreen from './ContactList'
import * as FileSystem from 'expo-file-system'
import { Text } from 'react-native-paper'

interface Props {
  navigation: any
}

const fileUri: string = `${FileSystem.documentDirectory}`
console.log(fileUri)

export default function Dashboard({ navigation }: Props): JSX.Element {
  return (
    <Background>
      <LogoSm />
      <Header>Contact List Dashboard</Header>
      <Paragraph>
        Please select a max of 6 contacts.
      </Paragraph>
      <Paragraph>
        Then click "Generate Cards"
      </Paragraph>
      <Text></Text>
      <ContactListScreen />
    </Background>
  )
}
