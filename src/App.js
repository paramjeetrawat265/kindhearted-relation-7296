import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoute from './Routes/AllRoute';
import Footer from './Components/Footer';
import BottomCategory from './Components/BottomCategory';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
      <BottomCategory/>
      <Footer/>
    </div>
  );
}

export default App;
