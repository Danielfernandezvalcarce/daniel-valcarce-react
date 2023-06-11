import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Views/Home';
import { Academic } from './Views/Academic';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
    <Header />
    <Footer />
    </>
  );
}

export default App;
