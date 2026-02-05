import { useContext } from "react";
import CountContext from "../contexts/CountContext";

function HomePage() {

	const { lang } = useContext(CountContext);

	return <div id="page-home">
		<h1>Rick & Morty API</h1>
		<h2>Benvenuto nella wiki di Rick & Morty</h2>
		<p>Puoi trovare qui informazioni su tutti i personaggi della serie</p>
		<p>Dati da contesto: {lang}</p>
	</div>
}

export default HomePage