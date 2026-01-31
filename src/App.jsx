import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Characters from "./pages/Characters"

function App() {
	return <BrowserRouter>
		<Routes>
			<Route path="/" Component={HomePage} />
			<Route path="/about" Component={About} />
			<Route path="/characters" Component={Characters} />
		</Routes>
	</BrowserRouter>;
}

export default App