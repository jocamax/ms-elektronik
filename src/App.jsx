import { MantineProvider, Text, Button, Stack, colorScheme } from "@mantine/core";
import './app.css'
import { ContactIcons } from "./components/Contact";
import { HeroBullets } from "./components/Header";
import {HeaderResponsive } from "./components/Navbar";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Proizvodi from "./pages/Proizvodi";

export default function App() {
  return (
    <MantineProvider theme={{colorScheme: 'dark'}} withGlobalStyles withNormalizeCSS>
     <BrowserRouter>
     <HeaderResponsive/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/proizvodi" element={<Proizvodi />}></Route>
    </Routes>
  </BrowserRouter>
    </MantineProvider>
  );
}
