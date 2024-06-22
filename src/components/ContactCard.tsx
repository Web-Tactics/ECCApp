import React, { memo } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import useContactStore from '../store/contactStore'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
      <View style={styles.firstLastNameView}>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
      </View>
      <TouchableOpacity
      style={styles.selectButton}
      onPress={() => handleClick(firstName, lastName, phoneNumbers)}>
      <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
  },
  selectButton: {
    padding: 8,
    marginLeft: 25,
    backgroundColor: '#f194ff',
  },
  buttonText: {
    fontSize: 10,
  },
  firstLastNameView: {
    width: 190,
  },
})
export default memo(ContactCard)


// elevation: 4,

// shadowColor: 'black',
// shadowRadius: 4,
// shadowOpacity: 0.26,