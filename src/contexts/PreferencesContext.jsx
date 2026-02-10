import { createContext, useContext, useState } from "react";

const PreferencesContext = createContext(null);

function PreferencesProvider({ children }) {

	const defaultPreferences = {
		darkMode: false,
		lang: "it-IT",
		numero: 42
	};

	function toggleDarkMode() {

		const nuovePreferenze = {
			...preferences,
			darkMode: !preferences.darkMode
		};

		setPreferences(nuovePreferenze);
	}

	function displayDarkMode() {
		return preferences.darkMode ? "Dark mode attualmente attivo" : "Dark mode attualmente disattivo";
	}

	const [preferences, setPreferences] = useState(defaultPreferences);

	const value = { preferences, toggleDarkMode, displayDarkMode };

	return <PreferencesContext.Provider value={value}>
		{children}
	</PreferencesContext.Provider>

}

//Custom Hook
function usePreferences() {
	const context = useContext(PreferencesContext);
	return context;
}

export { PreferencesProvider, usePreferences };