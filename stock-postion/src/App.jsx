import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import StockPosition from "./StockPosition";
import FilterBar from "./FilterBar";

function App() {
	return (
		<div className="StockPositionContainer">
			<FilterBar />
			<StockPosition />
		</div>
	);
}

export default App;
