import logo from './logo.svg';
import './App.css';
import {Welcome} from './components/welcome'
import { Counter } from './components/counter';
import { Clock } from './components/clock';
import { User } from './components/user';
import { ToggleSwitch } from './components/toggleswitch';

function App() {
  return (
    <div className='App'>
      <p className='title'>23BAI1589 React JS</p>
      <Welcome/>
      <Counter/>
      <Clock/>
      <User/>
      <ToggleSwitch/>
    </div>
  );
}

export default App;