import './App.css';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Featured/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
