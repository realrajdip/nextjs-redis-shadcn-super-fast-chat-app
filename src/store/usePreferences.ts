// import { useState } from "react";
import { create } from "zustand";

type Preferences = {
    soundEnabled: true, 
    setSoundEnabled: (soundEnabled: Boolean) => void, 
}

export const usePreferences = create<Preferences>((set) => ({
    soundEnabled: true, 
    setSoundEnabled: (soundEnabled: boolean) => set({soundEnabled})
}));

// const [state, setState] = useState(true);
