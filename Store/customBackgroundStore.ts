import { create } from 'zustand';


interface ColorState {
    from: string | null;
    via: string | null;
    to: string | null;
}

interface ColorStore {
    colors: ColorState;
    setColors: (newColors: Partial<ColorState>) => void;
}
const useCustomBgStore = create<ColorStore>((set) => ({
    colors: {
        from: null,
        via: null,
        to: null,
    },
    setColors: (newColors) =>
        set((state) => ({ colors: { ...state.colors, ...newColors } })),
}));

export default useCustomBgStore;
