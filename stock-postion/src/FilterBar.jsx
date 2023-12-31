import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FilterButton from "./FilterButton";

export default function FilterBar({ onHandleFilterChange, age, setAge }) {
	return (
		<Box sx={{ flexGrow: 1 }} className="FilterBar">
			<AppBar position="fixed" sx={{ backgroundColor: "#ff9a02" }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Look<b>Up</b>
					</Typography>
					<FilterButton
						handleFilter={onHandleFilterChange}
						age={age}
						setAge={setAge}
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
