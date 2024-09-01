import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-paper'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import * as Contacts from 'expo-contacts'
import ContactCard from '../components/ContactCard'
import { convertHtmlToPdfAndSendPrint } from '../helpers/convertHtmlToPdfAndSendPrint'
import useContactStore from '../store/contactStore'
import { Searchbar } from 'react-native-paper'
import SelectedNameBox from '../components/SelectedNameBox'
import { renderPrimeHTML } from '../cardTemplates/primeCard'

const ContactListScreen: React.FC = () => {
  type initstate = any

  interface Contact {
    contactType: string
    firstName: string
    id: any
    imageAvailable: boolean
    lastName: string
    lookupKey: string
    middleName?: string
    name: string
    phoneNumbers?: any[] // Replace 'any' with the correct type for phoneNumbers if possible
  }

  const [contacts, setContacts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const selection = useContactStore((state: initstate) => state.selectedArray)
  const onChangeSearch = (query: any) => setSearchQuery(query)

 
  
const htmlContent = renderPrimeHTML(selection)


  const handleClick = () => {
    convertHtmlToPdfAndSendPrint(htmlContent)
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync()
        if (status === 'granted') {
          const { data }: any = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
    
          })
          setContacts(
            data.filter(
              (contact:any) => contact.name && contact.name.startsWith(searchQuery)
            )
          )
        } else {
          console.log('Permission to access contacts was denied')
        }
      } catch (error) {
        console.error('Error loading contacts:', error)
      }
    })()
  }, [searchQuery])

  const MemoizedContactCard = React.memo(ContactCard)

  const renderItem = ({ item }: { item: Contact }) => (
    <TouchableOpacity>
      <MemoizedContactCard
        firstName={item.firstName}
        lastName={item.lastName ? item.lastName : "" }
        phoneNumbers={item.phoneNumbers}
        key={item.id}
      />
    </TouchableOpacity>
  )

 

  return (
    <View style={{ width: '100%', height: '65%' }}>
      <SelectedNameBox />
      <Button
        mode="contained"
        style={{ marginTop: 24, marginBottom: 24}}
        onPress={() => handleClick()}
      >
        Generate Cards
      </Button>
      {/* search bar */}
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {/* search bar */}
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.lookupKey}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
      />
      
    </View>
    
  )
}

export default ContactListScreen

