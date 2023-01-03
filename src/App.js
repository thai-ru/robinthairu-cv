import Navbar from "./Navbar";
import Footer from "./footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const title = "Thairu";

function App() {
  return (
      <Router>
        <div className="App m-2">

        <Navbar/>

          {/* Content */}

          <div>
            <Switch>
              <Route>

                  <Home/>
                  
              </Route>
            </Switch>
          </div>

          {/* End of Content */}

          <Footer/>
        </div>
      </Router>
  );
}

export default App;
