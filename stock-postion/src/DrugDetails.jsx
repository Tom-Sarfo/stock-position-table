import { Chip } from "@mui/material";
import "./App.css";
import BoltIcon from "@mui/icons-material/Bolt";
export default function DrugDetails({ drug, ExpandDetail }) {
	return (
		<div>
			{ExpandDetail === true && (
				<table width={450} className="DrugDetailTable">
					<tbody>
						<tr>
							<td>
								<b>Drug details</b>
							</td>
							<td>
								<Chip
									icon={<BoltIcon />}
									label="Movable"
									variant="contained"
									size="small"
									sx={{
										background: "#FF5100",
										color: "white",
									}}
									className="chip"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<b>Availability</b>
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">{drug.Availability}pks</b>
							</td>
						</tr>
						<tr>
							<td>
								<b>Old Price</b>
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">¢19</b>
							</td>
						</tr>
						<tr>
							<td>
								{drug.Alternative !== "" ? (
									<b>{drug.Alternative} (Alternative)</b>
								) : (
									<b>No Alternative Available</b>
								)}
							</td>
							<td align="center">
								<b className="RightAlignSmallScreen">¢0.00</b>
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
}
