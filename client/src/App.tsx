import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import { lightTheme, darkTheme } from "./components/theme";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import GlobalStyled from "./components/GlobalStyled";

function App() {
  const [theme, ThemeToggler] = useTheme();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <Header theme={theme} themeToggler={ThemeToggler} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
