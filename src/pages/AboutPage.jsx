import { usePreferences } from "../contexts/PreferencesContext";

function About() {
	const { preferences, displayDarkMode, toggleDarkMode } = usePreferences();

	return <div id="page-about">
		<h1>About</h1>
		<p>Questa invece è About</p>
		<p>Dati da contesto: {preferences.numero} - {preferences.lang}</p>
		<a className="btn" onClick={toggleDarkMode}>{displayDarkMode()}</a>
	</div>
}

export default About