import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
    cpmst[theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            {/* add this so mui has acces to it */}
            <ThemeProvider theme={theme}>
                {/* resets css to default */}
                <CssBaseline />
                <div className="app">
                    <main className="content"></main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
