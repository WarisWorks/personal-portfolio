import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../src/components/NavBar';
import { Banner } from '../src/components/Banner';
import { Skills } from '../src/components/Skills';
import { Projects } from '../src/components/Projects';
import { Contact } from './components/Contact';
import { Footer } from '../src/components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
