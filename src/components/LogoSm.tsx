import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/EEClogo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginBottom: 10,
  },
})