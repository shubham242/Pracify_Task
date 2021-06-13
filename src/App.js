import './App.css';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
import Company from './components/Company.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Company/>
      <Main/>
      <Footer/>
      <img className="Flower" src={process.env.PUBLIC_URL + '/Group195.png'} style={{position:"absolute",top:"310px",left:"740px"}}/>
      <img alt="no text" src={process.env.PUBLIC_URL + '/Group134.png'} style={{position:"absolute",top:"250vh",left:"-60%",height:"1300px"}}/>
    </div>
  );
}

export default App;
