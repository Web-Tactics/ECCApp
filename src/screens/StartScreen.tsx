import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome to the Mobile Emergency Card Creator</Header>
      <Paragraph>
      This app creates up to 6 contact cards from your phone's contact list and allows you to print them, providing a handy backup to keep in your wallet for times when your phone isn't accessible.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}
      >
        OPEN CONTACTS
      </Button>
    
    </Background>
  )
}
