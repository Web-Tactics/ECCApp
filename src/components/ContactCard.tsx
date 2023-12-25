import React, { memo } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import useContactStore from '../store/contactStore'
export interface Contact {
  id: number
  name: string
  photo: string
  firstName: string
  lastName: string
  phoneNumbers: string[]
}

interface ContactState {
 checkForDuplicatesAddToSelected: (contact: Contact) => void
}

function ContactCard({ firstName, lastName, phoneNumbers }: Contact) {
  const checkForDuplicatesAddToSelected = useContactStore((state:any)=>state.checkForDuplicatesAddToSelected)
 


  const handleClick = <T extends {firstName: string; lastName: string; phoneNumbers: string[]}> (firstName: T['firstName'], lastName: T['lastName'], phoneNumbers: T['phoneNumbers']) => {
      checkForDuplicatesAddToSelected({ firstName, lastName, phoneNumbers });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
      </View>
      <View>
        <Button
        title="test2"
        color="#f194ff"
        onPress={() => handleClick(firstName, lastName, phoneNumbers)}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'red',
  },
  profileContainer: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bornAtText: {
    fontSize: 18,
  },
})
export default memo(ContactCard)
