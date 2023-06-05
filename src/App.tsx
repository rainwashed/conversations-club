import Navbar from "./components/navbar.component";
import HomeRoute from "./routes/home";
import "./assets/app.scss";
import { Switch, Route } from "react-router-dom";
import AboutRoute from "./routes/about";
import ViewRoute from "./routes/view";
import ContactRoute from "./routes/contact";
import NullRoute from "./routes/404";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="">
            <HomeRoute />
          </Route>
          <Route path="/about">
            <AboutRoute />
          </Route>
          <Route path="/view">
            <ViewRoute />
          </Route>
          <Route path="/contact">
            <ContactRoute />
          </Route>
          <Route path="*">
            <NullRoute />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
