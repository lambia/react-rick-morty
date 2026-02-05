import { createContext, useContext, useState } from "react";

const PreferencesContext = createContext(null);

function PreferencesProvider({ children }) {

	const defaultPreferences = {
		darkMode: false,
		lang: "it-IT",
		numero: 42
	};

	//In questo caso passo [getter, setter] che verrà richiamato dai componenti con:
	// ===> const [preferences, setPreferences] = usePreferences();
	const [preferences, setPreferences] = useState(defaultPreferences);

	return <PreferencesContext.Provider value={[preferences, setPreferences]}>
		{children}
	</PreferencesContext.Provider>

}

//Custom Hook
function usePreferences() {
	const context = useContext(PreferencesContext);
	return context;
}

export { PreferencesProvider, usePreferences };