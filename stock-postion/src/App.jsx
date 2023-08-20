// import CollapsibleTable from "./table";
import Stack from "@mui/material/Stack";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import DrugListCard from "./DrugListCard";

function App() {
	return (
		<div className="StockPositionContainer">
			<Stack spacing={1}>
				<DrugListCard />
				<DrugListCard />
				<DrugListCard />
			</Stack>
		</div>
	);
}

export default App;
