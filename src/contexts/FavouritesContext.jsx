import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext(null);

function FavouritesProvider({ children }) {

	const [favourites, setFavourites] = useState([2, 5, 7]);

	const datiDaCondividere = { favourites, setFavourites };

	return <FavouritesContext.Provider value={datiDaCondividere}>
		{children}
	</FavouritesContext.Provider>
}

function useFavourites() {
	return useContext(FavouritesContext);
}

export { FavouritesProvider, useFavourites };

/*************************************************/
/**************** ESEMPI DI UTILIZZO *************/
/*************************************************/

//Providing in App:
/*
import { FavouritesProvider } from "./contexts/FavouritesContext";
function App() {
	return <FavouritesProvider>
		...componenti/rotte...
	</FavouritesProvider>
*/

// Utilizzo da componente:
/*
import { useFavourites } from "../contexts/FavouritesContext";
function Componente() {
	const { dato, setDato } = useFavourites();
	return <div>Dati ottenuti: {dato.key}</div>
}
*/