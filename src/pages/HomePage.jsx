import { usePreferences } from "../contexts/PreferencesContext";
// import { useContesto } from "../contexts/ContestoContext";

function HomePage() {

	const { preferences, displayDarkMode } = usePreferences();
	// const { dato, setDato } = useContesto();

	return <div id="page-home">
		<h1>Rick & Morty API</h1>
		<h2>Benvenuto nella wiki di Rick & Morty</h2>
		<p>Puoi trovare qui informazioni su tutti i personaggi della serie</p>
		<p>{displayDarkMode()}</p>
		{/* <p>Dati di contesto: {dato.key}</p> */}
	</div>
}

export default HomePage