import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios';

function CharacterDetailPage() {

	const { id } = useParams();

	const navigate = useNavigate();

	const [personaggio, setPersonaggio] = useState(null);

	function getData() {

		// console.log("ID: ", typeof id);
		// <--- VALIDAZIONE TIPO ID (intero > 0)

		let url = `https://rickandmortyapi.com/api/character/${id}`;

		axios.get(url).then((res) => {
			setPersonaggio(res.data);
		}).catch(error => {
			console.error("Ops... Qualcosa è andato storto:", error.message);
			navigate("/characters");
		})
	}

	useEffect(getData, [id]);

	if (personaggio == null) {
		return <div id="page-character-detail"><h1>Caricamento...</h1></div>
	} else {
		return <div id="page-character-detail">
			<h1>{personaggio.name}</h1>
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
				<Link to={`/characters/`} className="link">Torna alla lista personaggi</Link>
				<br />
				<Link to={`/characters/${parseInt(id) + 1}`} className="link">Vai al prossimo personaggio</Link>
			</div>
		</div>
	}
}

export default CharacterDetailPage