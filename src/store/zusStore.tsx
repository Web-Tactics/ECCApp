import { create } from 'zustand'

export const useStore = create((set) => ({
  demo: 'This text is from the zustand store!!',
  changeText: (payload) => set((state) => ({ demo: payload })),
  removeAllText: () => set({ demo: '' }),
}))

export default useStore
