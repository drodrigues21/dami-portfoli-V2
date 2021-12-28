import AboutMe from './components/AboutMe';
import EventBanners from './components/EventBanners';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Lookbooks from './components/Lookbooks';
import './styles/App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Lookbooks />
      <EventBanners />
      <Footer />
    </div>
  );
}

export default App;
