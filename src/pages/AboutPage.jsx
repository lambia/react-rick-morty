import { usePreferences } from "../contexts/PreferencesContext";

function About() {
	const [preferences, setPreferences] = usePreferences();

	function toggleDarkMode() {

		const nuovePreferenze = {
			...preferences,
			darkMode: !preferences.darkMode
		};

		setPreferences(nuovePreferenze);
	}

	return <div id="page-about">
		<h1>About</h1>
		<p>Questa invece è About</p>
		<p>Dati da contesto: {preferences.numero} - {preferences.lang}</p>
		<a className="btn" onClick={toggleDarkMode}>{preferences.darkMode ? "Passa al light mode" : "Passa al lato oscuro"}</a>
	</div>
}

export default About