import Navbar from "./Navbar";
import Footer from "./footer";
import Home from "./Home";

const title = "Thairu";

function App() {
  return (
    <div className="App m-2">

    <Navbar/>

    {/* Content */}

    <div>
    <Home/>
    </div>

    {/* End of Content */}

    <Footer/>
    </div>
  );
}

export default App;
