import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import ContactListScreen from './ContactList'
import * as FileSystem from 'expo-file-system'

interface Props {
  navigation: any
}

const fileUri: string = `${FileSystem.documentDirectory}`
console.log(fileUri)

export default function Dashboard({ navigation }: Props): JSX.Element {
  return (
    <Background>
      <Logo />
      <Header>Contact List Dashboard</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <ContactListScreen />
    </Background>
  )
}
