import { Navbar } from "./Navbar";
import { BrowserRouter as Routes, Route } from 'react-router-dom';

export function Header() {
  return (
    <header>
        <Navbar />
    </header>
  );
}