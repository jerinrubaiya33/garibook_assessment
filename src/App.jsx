import './App.css'
import Landing from './pages/Landing.jsx'
import Navbar from './pages/Navbar.jsx'
import "./index.css";
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Heading from './pages/Heading.jsx';
import MobileApp from './pages/Mobile_App.jsx';
import NewPage from './pages/New.jsx';
import Footer from './pages/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Landing/>
      <About/>
      <Service/>
      <Heading/>
      <MobileApp/>
      <NewPage/>
      <Footer/>
    </>
  )
}

export default App