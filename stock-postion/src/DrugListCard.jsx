import { Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DrugDetails from "./DrugDetails";
import BasicMenu from "./menu";

import { useState } from "react";

export default function DrugListCard({ drug }) {
	const [expandDrugDetail, setExpandDrugDetail] = useState(false);

	function handleDetailExpansion() {
		setExpandDrugDetail(!expandDrugDetail);
	}

	return (
		<Paper className="drugItem">
			<table>
				<tbody>
					<tr>
						<td>ID:</td>
						<td colSpan={2} style={{ borderBottom: "2px solid #F1C232" }}>
							GH45385
						</td>
						<td align="right">
							<BasicMenu />
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
							<p className="drugName">{drug.DrugName}</p>
						</td>
						<td>
							<b>¢{drug.PriceList}</b>
						</td>
					</tr>
				</tbody>
			</table>
			<DrugDetails ExpandDetail={expandDrugDetail} drug={drug} />
		</Paper>
	);
}
