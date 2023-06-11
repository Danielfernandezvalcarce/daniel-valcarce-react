import { Navbar } from "./Navbar";
import { BrowserRouter as Routes, Route } from 'react-router-dom';

export function Header() {
  return (
    <header class="bg-dark text-white">
        <Navbar />
    </header>
  );
}