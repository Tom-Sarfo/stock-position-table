import { Stack, Paper } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DrugDetails from "./DrugDetails";
import { useState } from "react";

export default function StockPosition() {
	const [expandDrugDetail, setExpandDrugDetail] = useState(false);

	function handleDetailExpansion() {
		setExpandDrugDetail(!expandDrugDetail);
	}
	return (
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
							{expandDrugDetail === false ? (
								<ExpandMoreIcon onClick={handleDetailExpansion} />
							) : (
								<ExpandLessIcon onClick={handleDetailExpansion} />
							)}
						</td>
						<td colSpan={2} width={430}>
							<p className="drugName">Augmentin Syrup x10</p>
						</td>
						<td>
							<b>¢20</b>
						</td>
					</tr>
				</table>
				<DrugDetails ExpandDetail={expandDrugDetail} />
			</Paper>
		</Stack>
	);
}
