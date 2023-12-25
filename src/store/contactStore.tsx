import { create } from 'zustand'

type initstate = any

interface ContactObject {
  firstName: string
  lastName: string
}

const useContactStore = create((set) => ({
  selectedArray: [],
  addToSelected: (id: string) =>
    set((state: initstate) => ({
      selectedArray: [...state.selectedArray, id],
    })),
    checkForDuplicatesAddToSelected: (contactObject: { firstName: string, lastName: string, phoneNumbers: string }) =>
  set((state: initstate) => {
     // Check if the selectedArray has reached the limit of 6 items
     if (state.selectedArray.length >= 6) {
      // If the limit is reached, return the current state without adding more
      return state;
    }
    // Check for duplicates before adding the contactObject
    const isDuplicate = state.selectedArray.some(
      (item: ContactObject) =>
        item.firstName === contactObject.firstName && item.lastName === contactObject.lastName
    );

    if (!isDuplicate) {
      return {
        selectedArray: [...state.selectedArray, contactObject],
      };
    }

    // If contactObject is already in the selectedArray, return the current state
    console.log(state.selectedArray[2].phoneNumbers[0])
    return state;
  }),
  removeObjectByFirstAndLastName: (firstName: string, lastName: String) => {
    set((state: initstate) => ({
      selectedArray: state.selectedArray.filter(
        (item: ContactObject) =>
          !(item.firstName === firstName && item.lastName === lastName)
      ),
    }))
  },
}))

export default useContactStore
