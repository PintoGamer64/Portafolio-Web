//Imports
import ColorTheme from './context/colorContext/ColorTheme';
import LenguajeHandler from './context/lenguajeContext/HandleLenguaje';

//Components
import Navbar from './components/Navbar/Navbar';
import MainPage from './Routes/Main';
import Footer from './components/Footer/Footer';

//Css
import './App.css';

export default function App() {
  return (
    <ColorTheme>
      <LenguajeHandler>
        <Navbar />
        <MainPage />
        <Footer />
      </LenguajeHandler>
    </ColorTheme >
  );
}