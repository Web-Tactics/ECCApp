import React, { Fragment } from 'react'
import useContactStore from '../store/contactStore'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withExpoSnack } from 'nativewind'
import { styled } from 'nativewind'
import { StyleSheet } from 'react-native'

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
      <StyledView className="w-[340px] h-[230px] p-2.5 bg-white rounded-[20px] flex-col justify-center items-center gap-[27px] inline-flex">
        <Text>
          {' '}
          {selection?.map((contact:any, index:any) => {
            return (
              <Fragment key={index} >
                <StyledText key={Math.random + contact.firstName + contact.lastName} className="w-16 text-black text-base font-normal">
                {contact.firstName + ' ' + contact.lastName + ' '}
                </StyledText>     

                 <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleClick(contact.firstName, contact.lastName)}
                    accessibilityLabel="remove from list button">
                   <Text style={styles.buttonText}>REMOVE</Text>
                </TouchableOpacity> 
                 <StyledText>{'\n'}</StyledText>
              </Fragment>
              
            )
          })}
        </Text>
      </StyledView>
    </View>
  )
}

const styles = StyleSheet.create({
  removeButton: {
    padding: 3,
    marginLeft: 5,
    backgroundColor: '#CA1C24',
  },
  buttonText: {
    fontSize: 8,
    color: 'white',
    padding: 1,
    borderRadius: 10,
  
  },
})


export default withExpoSnack(SelectedNameBox)

