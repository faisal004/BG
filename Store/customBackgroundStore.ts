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
interface SliderState {
    xAxis: number;
    yAxis: number;
    height: number;
    width: number;
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
    switchChecked:boolean;
    setSwitchChecked:(switchChecked:boolean)=>void
    sliders: SliderState;
    setSliders: (newSliders: Partial<SliderState>) => void;
    

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
    sliders: {
        xAxis: 0,
        yAxis: 0,
        height: 500,
        width: 500
    },
    position: "top left",
    setPosition: (newPosition) => set({ position: newPosition }),
    shape: "ellipse",
    setShape: (newShape) => set({ shape: newShape }),
    setColors: (newColors) =>
        set((state) => ({ colors: { ...state.colors, ...newColors } })),
    setColorsPercentage: (newPercentage) =>
        set((state) => ({ colorsPercentage: { ...state.colorsPercentage, ...newPercentage } })),
    switchChecked: false,
    setSwitchChecked: (switchChecked: boolean) => set({ switchChecked }),
    setSliders: (newSliders) =>
        set((state) => ({ sliders: { ...state.sliders, ...newSliders } })),
}));

export default useCustomBgStore;
