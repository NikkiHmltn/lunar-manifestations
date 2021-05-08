import {Route} from 'react-router-dom'
import Home from './components/Home.js'
import Search from './components/Search.js'
import Results from './components/Results.js'
import Spell from './components/Spell.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Search}/>
      <Route path="/results" component={Results}/>
      <Route path="/spell" component={Spell}/>
    </div>
  );
}

export default App;
