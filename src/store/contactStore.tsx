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
