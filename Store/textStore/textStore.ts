import { create } from 'zustand'
interface TextState {
    textColor: string;
    settxtValue: (newValue: string) => void;
    textDynamic: {}
    settxtDynamicValue: (newValue: {}) => void;
}
export const useTextStore = create<TextState>((set) => ({
    textColor: '',
    settxtValue: (newValue) => set({ textColor: newValue }),
    textDynamic: {},
    settxtDynamicValue: (newValue) => set({ textDynamic: newValue }),

}))