import { Link, NavLink } from "react-router-dom";

function Navbar() {
	return <div id="navbar">
		<p className="left">Rick&Morty API</p>
		<nav className="right">
			<NavLink className="link" to="/">Home</NavLink>
			<NavLink className="link" to="/characters">Personaggi</NavLink>
			<NavLink className="link" to="/about">About</NavLink>
		</nav>
	</div>
}

export default Navbar;