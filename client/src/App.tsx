import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import { lightTheme, darkTheme } from "./components/theme";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import GlobalStyled from "./components/GlobalStyled";
import InvoiceDetailPage from "./pages/InvoiceDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";

function App() {
  const [theme, ThemeToggler] = useTheme();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <Header theme={theme} themeToggler={ThemeToggler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<InvoiceDetailPage />} />
        <Route path = "*" element = {<NotFoundPage/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
