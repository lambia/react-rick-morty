import { usePreferences } from "../contexts/PreferencesContext";

function About() {
	const { lang, numero } = usePreferences();

	return <div id="page-about">
		<h1>About</h1>
		<p>Questa invece è About</p>
		<p>Dati da contesto: {numero} - {lang}</p>
	</div>
}

export default About