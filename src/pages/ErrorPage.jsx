import { Link } from "react-router-dom";

function ErrorPage() {
	return <div id="page-home">
		<h1>404 - Not Found</h1>
		<h2>Questo contenuto non esiste</h2>
		<Link to="/">Torna alla homepage</Link>
	</div>
}

export default ErrorPage