import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";

function App(){

return(

<>

<Navbar/>

<Login/>

<Home/>

<Events/>

<About/>

<Bookings/>

<Footer/>

</>

)

}

export default App;