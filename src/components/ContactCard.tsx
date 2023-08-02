import React, { memo } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import useContactStore from '../store/contactStore'
import { useState } from 'react'
export interface Contact {
  id: number
  name: string
  photo: string
  firstName: string
  lastName: string
}

function ContactCard({ firstName, lastName }) {
  const [isChecked, setIsChecked] = useState(false)
  const [data, setData] = useState(null)
  const addToSelected = useContactStore((state) => state.addToSelected)
  //const selectedArray = useContactStore((state) => state.selectedArray)
  const UnSelect = useContactStore(
    (state) => state.removeObjectByFirstAndLastName
  )

  const handleCheckboxChange = (newValue, firstName, lastName) => {
    setIsChecked(newValue)
    if (newValue) {
      addToSelected({ firstName, lastName })
      // console.log(selectedArray)
    } else {
      UnSelect(firstName, lastName)
      //console.log(selectedArray)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
      </View>
      <View>
        <Checkbox.Android
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxChange(!isChecked, firstName, lastName)}
        />
      </View>
      {console.log('render')}
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
