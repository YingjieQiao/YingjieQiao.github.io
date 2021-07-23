import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Home from "./Components/Home"
import Projects from "./Components/Projects";
import Experiences from "./Components/Experiences";

function App() {
  return (
    <div className="App">

		<Router>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/projects" exact component={Projects}/>
				<Route path="/experiences" exact component={Experiences}/>

			</Switch>
		</Router>

    </div>
  );
}

export default App;
