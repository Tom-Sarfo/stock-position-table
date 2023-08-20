import { Chip } from "@mui/material";
import "./App.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BoltIcon from "@mui/icons-material/Bolt";
export default function DrugDetails({ ExpandDetail }) {
	return (
		<div>
			{ExpandDetail === true && (
				<table width={450} className="DrugDetailTable">
					<tr>
						<td>
							<b>Drug details</b>
						</td>
						<td align="right">
							<Chip
								icon={<BoltIcon />}
								label="Movable"
								variant="contained"
								size="small"
								sx={{
									background: "#ff9a02",
									color: "white",
								}}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<b>Availability</b>
						</td>
						<td align="center">
							<b>345pks</b>
						</td>
					</tr>
					<tr>
						<td>
							<b>Old Price</b>
						</td>
						<td align="center">
							<b>¢19</b>
						</td>
					</tr>
					<tr>
						<td>
							<b>Metformin Syrup (Alternative)</b>
						</td>
						<td align="center">
							<b>¢21</b>
						</td>
					</tr>
				</table>
			)}
		</div>
	);
}
