import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appoinment from "./pages/Appointment/Appointment/Appoinment";
import Home from "./pages/Home/Home/Home";
import Physiotherapist from "./pages/Physiotherapists/Physiotherapists/Physiotherapist";
import NotFound from "./pages/NotFound/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import SingleService from "./pages/SingleService/SingleService/SingleService";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/physiotherapist">
          <Physiotherapist />
        </Route>
        <Route path="/appointment">
          <Appoinment />
        </Route>
        <Route path="/service/:serviceId">
          <SingleService />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;