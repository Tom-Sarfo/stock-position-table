import Papa from "papaparse";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import DrugListCard from "./DrugListCard";
import "./App.css";
export default function StockPosition() {
	const [drugData, setDrugData] = useState([]);

	function fetchData() {
		Papa.parse(
			"https://docs.google.com/spreadsheets/d/e/2PACX-1vQwv6utwnFjzgHBzIo-lbVKhs4P7bNdExtgK_Zag7xVpH9sd4-ZH0P4YV9p3-S5uqhalUlS6RdwdEZX/pub?output=csv",
			{
				download: true,
				header: true,
				complete: (results) => {
					const drugsArray = results.data;
					console.log(drugsArray);
					setDrugData(drugsArray);
				},
			}
		);
	}

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<Stack spacing={1}>
				{drugData.map((drug) => (
					<div key={drug.Number}>
						<DrugListCard drug={drug} />
					</div>
				))}
			</Stack>
		</div>
	);
}
