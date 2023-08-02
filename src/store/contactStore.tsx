import { create } from 'zustand'

const useContactStore = create((set) => ({
  selectedArray: [],
  addToSelected: (id) =>
    set((state) => ({ selectedArray: [...state.selectedArray, id] })),
  removeObjectByFirstAndLastName: (firstName, lastName) => {
    set((state) => ({
      selectedArray: state.selectedArray.filter(
        (item) => !(item.firstName === firstName && item.lastName === lastName)
      ),
    }))
  },
}))

export default useContactStore
