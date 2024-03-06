import React from 'react'
import useContactStore from '../store/contactStore'
import { View, Text, Button } from 'react-native'

import { withExpoSnack } from 'nativewind'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)


interface contactStoreState {
  removeObjectByFirstAndLastName: any
}

function SelectedNameBox() {
  const selection = useContactStore((state: any) => state.selectedArray)
  const UnSelect = useContactStore(
    (state) => state.removeObjectByFirstAndLastName
  )

  const handleClick = (firstName:any, lastName:any) => {
      UnSelect(firstName, lastName)
  }

  return (
    <View>
      <StyledView className="w-[340px] h-[250px] p-2.5 bg-white rounded-[20px] flex-col justify-center items-center gap-[27px] inline-flex">
        <Text>
          {' '}
          {selection?.map((contact:any) => {
            return (
              <StyledText key={Math.random + contact.firstName + contact.lastName} className="w-16 text-black text-base font-normal">
                {contact.firstName + ' ' + contact.lastName + ' '}
                <Button
                 onPress={() => handleClick(contact.firstName,contact.lastName )}
                 color="#841584"
                 accessibilityLabel="Learn more about this purple button"
                 title='test'/>  
                 {'\n'}      
              </StyledText>
            )
          })}
        </Text>
      </StyledView>
    </View>
  )
}

export default withExpoSnack(SelectedNameBox)

