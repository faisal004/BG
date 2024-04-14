import { create } from 'zustand'
interface BackgroundState {
    backgroundColor: string;
    setBgValue: (newValue: string) => void;
}
export const useBackgroundStore = create<BackgroundState>((set) => ({
    backgroundColor: '',
    setBgValue: (newValue) => set({ backgroundColor: newValue }),

}))