import Papa from "papaparse";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import DrugListCard from "./DrugListCard";
import "./App.css";
import FilterBar from "./FilterBar";
export default function StockPosition() {
	const [drugData, setDrugData] = useState([]);
	const [age, setAge] = useState("");

	const handleFilterChange = drugData.filter((data) => {
		if (age === "Movable") {
			return data.Movable === "TRUE";
		} else if (age === "HighPrice") return data.HighPrice === "TRUE";
	});
	// console.log(handleFilterChange);

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
		<div className="drugList">
			<FilterBar
				onHandleFilterChange={handleFilterChange}
				age={age}
				setAge={setAge}
			/>

			<Stack spacing={1}>
				{age === ""
					? drugData.map((drug) => (
							<div key={drug.Number}>
								<DrugListCard drug={drug} />
							</div>
					  ))
					: handleFilterChange.map((drug) => (
							<div key={drug.Number}>
								<DrugListCard drug={drug} />
							</div>
					  ))}
			</Stack>
		</div>
	);
}
