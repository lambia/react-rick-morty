import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CharactersListPage from "./pages/CharactersListPage"
import DefaultLayout from "./layouts/DefaultLayout";
import CharacterDetailPage from "./pages/CharacterDetailPage";

function App() {
	return <BrowserRouter>
		<Routes>
			<Route Component={DefaultLayout}>
				<Route path="/" Component={HomePage} />
				<Route path="/about" Component={AboutPage} />
				<Route path="/characters" Component={CharactersListPage} />
				<Route path="/characters/:id" Component={CharacterDetailPage} />
			</Route>
		</Routes>
	</BrowserRouter>;
}

export default App