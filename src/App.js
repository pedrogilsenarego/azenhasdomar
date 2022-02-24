import "./default.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//pages
import HomePage from "./pages/HomePage";

//layouts
import MainLayout from "./hoc/MainLayout";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: ["Zen Kurenaido", "sans-serif"].join(",")
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<MainLayout>
					<HomePage />
				</MainLayout>
			</div>
		</ThemeProvider>
	);
}

export default App;
