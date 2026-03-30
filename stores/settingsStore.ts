import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SettingsState = {
  language: string;
  currency: string;
  customRates: Record<string, number>;
  setLanguage: (language: string) => void;
  setCurrency: (currency: string) => void;
  setCustomRate: (currencyCode: string, rate: number) => void;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      language: "ru",
      currency: "RUB",
      customRates: {},
      setLanguage: (language) => set({ language }),
      setCurrency: (currency) => set({ currency }),
      setCustomRate: (currencyCode, rate) => set((state) => ({
        customRates: { ...state.customRates, [currencyCode]: rate }
      })),
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);