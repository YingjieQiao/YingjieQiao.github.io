import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Experiences from "./Components/Experiences";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ProjectDetail from "./Components/ProjectDetail";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:projectId" component={ProjectDetail} />
          <Route path="/experiences" exact component={Experiences} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
