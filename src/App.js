import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AnimalsMenu from "./components/AnimalsMenu";
import ContainerInfo from "./components/ContainerInfo";
import FoCoInfo from "./components/FoCoInfo";

import Header from "./html/Header";

function App() {
  return (
    <BrowserRouter>
      <div id="page-container">
        <Header />
        <div className="container py-4">
          <div className="row">
            {/* <!-- Menu --> */}
            <AnimalsMenu />

            {/* <!-- Animal info --> */}
            <Switch>
              {/* <FoCoInfo /> */}
              <Route path="/animal/:animalId" component={ContainerInfo} />
              <Route path="/" component={FoCoInfo} />
              <Route exact path="/" />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
