import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ScrollState {
  y: number
}

const useScrollStore = create<ScrollState>()(
  devtools(
    persist(
      (set) => ({
        y: 0,
      }),
      {
        name: 'scroll-storage',
      }
    )
  )
)

export default useScrollStore
