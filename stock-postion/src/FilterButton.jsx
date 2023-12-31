import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterButton({ handleFilter, age, setAge }) {
	const handleChange = (event) => {
		setAge(event.target.value);
		return handleFilter;
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<InputLabel id="demo-select-small-label">Age</InputLabel>
			<Select
				labelId="demo-select-small-label"
				id="demo-select-small"
				value={age}
				label="Age"
				onChange={handleChange}
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value={"Movable"}>Movable</MenuItem>
				<MenuItem value={"HighPrice"}>High Price</MenuItem>
				<MenuItem value={30}>GoodPrice</MenuItem>
			</Select>
		</FormControl>
	);
}
