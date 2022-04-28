// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Switch} from "react-router";
import VideoPageView from "./components/VideoPageView"
import LandingPage from "./components/LandingPage"


export const config = {
  endpoint:`https://edf2d1b3-57fc-4218-b057-6ef66fdc840d.mock.pstmn.io/v1`
};


function App() {
  return (
    <div className="App">
    <React.StrictMode>
       <Switch>
            <Route exact path ="/index.html" component={LandingPage} />
            <Route path="/video/:id" component={VideoPageView} /> 
      </Switch>
    </React.StrictMode>
    </div>
  );
}

export default App;
