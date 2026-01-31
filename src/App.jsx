import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Characters from "./pages/Characters"
import Navbar from "./components/Navbar"
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
	return <BrowserRouter>
		<Routes>
			<Route Component={DefaultLayout}>
				<Route path="/" Component={HomePage} />
				<Route path="/about" Component={About} />
				<Route path="/characters" Component={Characters} />
			</Route>
		</Routes>
	</BrowserRouter>;
}

export default App