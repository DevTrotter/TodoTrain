import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Redirect to='/'/>
      </Switch>
    </Router>
  );
}

export default App;
