import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./css/globalStyles";
import theme from "./css/theme";
import User from "./pages/users/username";
import Users from "./pages/users";
import Home from "./pages";

const App = (): JSX.Element => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="users">
          <Route index element={<Users />} />
          <Route path=":username" element={<User />} />
        </Route>
        <Route element={() => <div>Not found</div>} />
      </Routes>
    </ThemeProvider>
  </Router>
);

export default App;
