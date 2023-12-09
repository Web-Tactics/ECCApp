import React from 'react'
import useContactStore from '../store/contactStore'
import { View, Text, Button } from 'react-native'

import { withExpoSnack } from 'nativewind'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

function SelectedNameBox() {
  const selection = useContactStore((state: initstate) => state.selectedArray)
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
              <StyledText className="w-16 text-black text-base font-normal">
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

{
  /* <div className="w-[340px] h-[342px] p-2.5 bg-white rounded-[20px] flex-col justify-center items-center gap-[27px] inline-flex">
  <div className="w-16 text-black text-base font-normal font-['Inter']">Name 1</div>
  <div className="w-16 h-4 text-black text-base font-normal font-['Inter']">Name 2</div>
  <div className="w-16 h-4 text-black text-base font-normal font-['Inter']">Name 3</div>
  <div className="w-16 h-4 text-black text-base font-normal font-['Inter']">Name 4</div>
  <div className="w-16 h-4 text-black text-base font-normal font-['Inter']">Name 5</div>
  <div className="w-16 h-4 text-black text-base font-normal font-['Inter']">Name 6</div>
</div>

onPress={() => handleClick(contact.firstName,contact.lastName )}

*/
}
