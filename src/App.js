import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

import Home from "./Components/Home"
import Projects from "./Components/Projects";
import Experiences from "./Components/Experiences";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">

		<BrowserRouter>
			<Header/>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/projects" exact component={Projects}/>
				<Route path="/experiences" exact component={Experiences}/>
			</Switch>
		</BrowserRouter>

    </div>
  );
}

export default App;
