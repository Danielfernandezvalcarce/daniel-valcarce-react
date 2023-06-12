import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Views/Home';
import { Academic } from './Views/Academic';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Background } from './components/Background';


function App() {
  return (
    <>
    <Background />
    <Header />
    <Footer />
    </>
  );
}

export default App;
