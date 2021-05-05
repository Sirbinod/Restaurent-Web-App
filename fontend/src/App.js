
import './App.css';
import Home from './components/Home';
import Navba from './components/Navbar';
import {Route} from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <div>

      <Navba/>
      <Route exact path="/"><Home/></Route>
      <Route path="/signup"><Signup/></Route>
      <Route path="/signin"><Signin/></Route>
      
    </div>
  );
}

export default App;
