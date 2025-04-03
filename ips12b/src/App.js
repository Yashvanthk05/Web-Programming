import logo from './logo.svg';
import styles from './style.module.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <nav className={styles.navbar}>
          <h1 style={{margin:10}}>Yashix.</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <ThemeSwitcher/>
    </div>
  );
}

export default App;
