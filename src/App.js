import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
        <Route path='/checkout'>
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path='/login'>
          <h1>Login</h1>
        </Route>
        <Route path='/'>
          <Header />
          <Home/> 
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
