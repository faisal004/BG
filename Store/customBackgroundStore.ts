import { create } from 'zustand';


interface ColorState {
    from: string | null;
    via: string | null;
    to: string | null;
}
interface ColorPercentageState {
    from: number;  
    via: number;
    to: number;
}
interface ColorStore {
    colors: ColorState;
    colorsPercentage: ColorPercentageState;
    setColorsPercentage: (newPercentage: Partial<ColorPercentageState>) => void
    setColors: (newColors: Partial<ColorState>) => void;
    position: string;
    setPosition: (newPosition: string) => void;
    shape: string;
    setShape: (newPosition: string) => void;

}
const useCustomBgStore = create<ColorStore>((set) => ({
    colors: {
        from: null,
        via: null,
        to: null,
    },
    colorsPercentage: {
        from: 0,  
        via: 50,
        to: 100,
    },
    position: "top left",
    setPosition: (newPosition) => set({ position: newPosition }),
    shape: "ellipse",
    setShape: (newShape) => set({ shape: newShape }),
    setColors: (newColors) =>
        set((state) => ({ colors: { ...state.colors, ...newColors } })),
    setColorsPercentage: (newPercentage) =>
        set((state) => ({ colorsPercentage: { ...state.colorsPercentage, ...newPercentage } })),
}));

export default useCustomBgStore;
