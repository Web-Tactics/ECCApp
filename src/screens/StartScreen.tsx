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
      This app generates up to 6 contact cards using your phone's contacts and offers the convenience of printing them to store in your wallet for situations when your phone may not be available.
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
