import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountContext from "./contexts/CountContext";

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CharactersListPage from "./pages/CharactersListPage"
import DefaultLayout from "./layouts/DefaultLayout";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import ErrorPage from "./pages/ErrorPage";

function App() {

	const preferences = {
		darkMode: false,
		lang: "it-IT",
		numero: 42
	};

	return <CountContext.Provider value={preferences}>
		<BrowserRouter>
			<Routes>
				<Route Component={DefaultLayout}>
					<Route path="/" Component={HomePage} />
					<Route path="/about" Component={AboutPage} />
					<Route path="/characters" Component={CharactersListPage} />
					<Route path="/characters/:id" Component={CharacterDetailPage} />
					<Route path="*" Component={ErrorPage} />
				</Route>
			</Routes>
		</BrowserRouter>
	</CountContext.Provider>;
}

export default App