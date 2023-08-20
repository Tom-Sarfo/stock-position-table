// import CollapsibleTable from "./table";
import stockPosition from "./stockPosition";
import { Stack, Paper } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

function App() {
	return (
		<div>
			<Stack>
				<Paper className="drugItem">
					<table>
						<tr>
							<td>ID:</td>
							<td colSpan={2} style={{ borderBottom: "2px solid #F1C232" }}>
								GH45385
							</td>
							<td align="right">
								<MoreVertIcon />
							</td>
						</tr>
						<tr>
							<td>
								<ExpandMoreIcon />
							</td>
							<td colSpan={2} width={390}>
								<p className="drugName">Augmentin Syrup x10</p>
							</td>
							<td>
								<b>¢20</b>
							</td>
						</tr>
					</table>
				</Paper>
			</Stack>
		</div>
	);
}

export default App;
