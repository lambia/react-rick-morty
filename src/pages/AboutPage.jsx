import { useContext } from "react";
import CountContext from "../contexts/CountContext";

function About() {
	const { lang, numero } = useContext(CountContext);

	return <div id="page-about">
		<h1>About</h1>
		<p>Questa invece è About</p>
		<p>Dati da contesto: {numero} - {lang}</p>
	</div>
}

export default About