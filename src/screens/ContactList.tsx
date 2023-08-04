import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-paper'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import * as Contacts from 'expo-contacts'
import ContactCard from '../components/ContactCard'
import { convertHtmlToPdfAndSendPrint } from '../helpers/convertHtmlToPdfAndSendPrint'
import useContactStore from '../store/contactStore'

const ContactListScreen: React.FC = () => {
  type initstate = any

  interface Contact {
    contactType: string
    firstName: string
    id: string
    imageAvailable: boolean
    lastName: string
    lookupKey: string
    middleName?: string
    name: string
    phoneNumbers?: any[] // Replace 'any' with the correct type for phoneNumbers if possible
  }

  const [contacts, setContacts] = useState([])
  const selection = useContactStore((state: initstate) => state.selectedArray)

  console.log(selection)

  const htmlContent = `<html>
  <head>
    <title>Six Business Cards</title>
  </head>
  <body>
  <div style="width: 802px; height: 874px; position: relative">
  <div style="left: 0px; top: 64px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 109px; display: inline-flex">
    <div style="width: 336px; height: 192px; position: relative">
      <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
      <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
        <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
        <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
          <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
        </div>
      </div>
      <div style="width: 187px; height: 34px; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">${
        selection[0]?.firstName === undefined ? '' : selection[0].firstName
      } ${
    selection[0]?.lastName === undefined ? '' : selection[0].lastName
  }</div>
      <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
      <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
      <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: (222) 222-222</div>
      <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: (222) 222-222</div>
    </div>
    <div style="width: 336px; height: 192px; position: relative">
      <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
      <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
        <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
        <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
          <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
        </div>
      </div>
      <div style="width: 187px; height: 34px; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">${
        selection[1]?.firstName === undefined ? '' : selection[1].firstName
      } ${
    selection[1]?.lastName === undefined ? '' : selection[1].lastName
  }</div>
      <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
      <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
      <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: (222) 222-222</div>
      <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: (222) 222-222</div>
    </div>
  </div>
  <div style="left: 0px; top: 365px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 109px; display: inline-flex">
    <div style="width: 336px; height: 192px; position: relative">
      <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
      <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
        <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
        <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
          <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
        </div>
      </div>
      <div style="width: 187px; height: 34px; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">Howard Warren</div>
      <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
      <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
      <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: (222) 222-222</div>
      <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: (222) 222-222</div>
    </div>
    <div style="width: 336px; height: 192px; position: relative">
      <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
      <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
        <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
        <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
          <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
        </div>
      </div>
      <div style="width: 187px; height: 34px; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">Howard Warren</div>
      <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
      <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
      <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: (222) 222-222</div>
      <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: (222) 222-222</div>
    </div>
  </div>
  <div style="left: 0px; top: 666px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 109px; display: inline-flex">
    <div style="width: 336px; height: 192px; position: relative">
      <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
      <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
        <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
        <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
          <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
        </div>
      </div>
      <div style="width: 187px; height: 34px; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">Howard Warren</div>
      <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
      <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
      <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: (222) 222-222</div>
      <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: (222) 222-222</div>
    </div>
    <div style="width: 336px; height: 192px; position: relative">
      <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
      <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
        <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
        <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
          <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
          <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
        </div>
      </div>
      <div style="width: 187px; height: 34px; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">Howard Warren</div>
      <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
      <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
      <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: (222) 222-222</div>
      <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: (222) 222-222</div>
    </div>
  </div>
</div>
  </body>
  </html>`

  const handleClick = () => {
    convertHtmlToPdfAndSendPrint(htmlContent)
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync()
        if (status === 'granted') {
          const { data }: any = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.ID],
          })
          setContacts(data)
        } else {
          console.log('Permission to access contacts was denied')
        }
      } catch (error) {
        console.error('Error loading contacts:', error)
      }
    })()
  }, [])
  //console.log(contacts)
  const renderItem = ({ item }: { item: Contact }) => (
    <TouchableOpacity>
      <ContactCard
        firstName={item.firstName}
        lastName={item.lastName}
        key={item.id}
      />
    </TouchableOpacity>
  )

  return (
    <View>
      <Text>Contact List</Text>
      <Button
        mode="contained"
        style={{ marginTop: 24 }}
        onPress={() => handleClick()}
      >
        does nothing now
      </Button>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.lookupKey}
      />
    </View>
  )
}

export default ContactListScreen

//Data Format
// {"contactType": "person", "firstName": "Park", "id": "1012", "imageAvailable": false, "lastName": "Cong", "lookupKey": "3694i4a257f5e8de88190", "middleName": "Side", "name": "Park Side Cong"}, {"contactType": "person", "firstName": "Patricia", "id": "1925", "imageAvailable": false, "lastName": "Simpkins", "lookupKey": "3694i1b317ea40e0da22e.3789r1861-482A504C3A2E3A2A4E3A42483E3A444E", "name": "Patricia Simpkins", "phoneNumbers": [[Object], [Object]]}

//search function

// function searchContactsByFirstName(contacts: Contact[], firstName: string): Contact[] {
//   return contacts.filter(contact => contact.firstName.toLowerCase().includes(firstName.toLowerCase()));
// }

// const searchTerm = "Pat";
// const searchResults = searchContactsByFirstName(contacts, searchTerm);
// console.log(searchResults);
