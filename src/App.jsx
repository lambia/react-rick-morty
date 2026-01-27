import { useEffect, useState } from 'react'
// const axios = require('axios'); //CommonJS (CJS)
import axios from "axios"; //MJS

function App() {

	const [todos, setTodos] = useState([]);

	function getData() {
		const apiUrl = "https://jsonplaceholder.typicode.com/todos";
		axios.get(apiUrl).then((res) => {
			console.log("Dati ricevuti da API", res.data);
			setTodos(res.data)
		})
	}

	function clearData() {
		setTodos([]);
	}

	useEffect(getData, [])

	return (
		<div>
			<h1>Hello React World</h1>
			<button onClick={getData}>Recupera dati</button>
			<button onClick={clearData}>Azzera dati</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	)
}

export default App
