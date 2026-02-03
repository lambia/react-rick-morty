import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

function CharactersListPage() {
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	function getData() {

		let url = "https://rickandmortyapi.com/api/character";

		if (currentPage > 1) {
			url = `${url}?page=${currentPage}`;
		}

		axios.get(url).then((res) => {
			const risultati = res.data;
			const personaggi = risultati.results;
			console.log("Dati ricevuti da API", personaggi);

			//res.data.results[0].id = 123123123; //per testare il navigate su id non validi
			setCharacters(res.data.results);

			setCurrentPage(currentPage + 1);
		}).catch(error => {
			console.error("Ops... Qualcosa è andato storto:", error.message);
		})
	}

	function clearData() {
		//Reimposto l'array vuoto e la pagina a 1
		setCharacters([]);
		setCurrentPage(1);
	}

	// function getStatus(status) {

	// 	if (status.toLowerCase() == "dead") {
	// 		return <div className="pallino dead"></div>

	// 	} else if (status.toLowerCase() == "alive") {
	// 		return <div className="pallino alive"></div>

	// 	} else {
	// 		return <div className="pallino"></div>

	// 	}
	// }

	useEffect(getData, []) //<-- al caricamento della pagina

	return (
		<div id="page-characters">
			<h1>Characters</h1>
			{/* <button className="btn" onClick={getData}>Recupera dati</button> */}
			<button className="btn" onClick={clearData}>Azzera dati</button>

			<button className="btn" onClick={getData}>Carica pagina successiva</button>

			<div className='flex-container flex-wrap gap-1'>
				{characters.map((personaggio) => (
					<div className='character-card' key={personaggio.id}>
						<img className="character-image" src={personaggio.image} />
						<p className="character-title">
							<span className={`pallino ${personaggio.status.toLowerCase()}`}></span>
							{personaggio.name} - {personaggio.species}
						</p>
						<p className="character-status">
							{/* {getStatus(personaggio.status)} */}
						</p>
						<p className="character-origin">{personaggio.origin.name}</p>
						<Link to={`/characters/${personaggio.id}`} className="link">Vai ai dettagli</Link>
					</div>
				))}
			</div>
		</div >
	)
}


export default CharactersListPage