import { createContext, useContext, useState } from "react";

const PreferencesContext = createContext(null);

function PreferencesProvider({ children }) {

	const defaultPreferences = {
		darkMode: false,
		lang: "it-IT",
		numero: 42
	};

	const [preferences, setPreferences] = useState(defaultPreferences);

	return <PreferencesContext.Provider value={preferences}>
		{children}
	</PreferencesContext.Provider>

}

//Custom Hook
function usePreferences() {
	const context = useContext(PreferencesContext);
	return context;
}

export { PreferencesProvider, usePreferences };