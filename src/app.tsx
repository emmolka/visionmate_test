import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/users/:id" component={User} />
        <Route component={() => <div>Not found</div>} />
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
