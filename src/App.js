import Home from "./Page/Home/home"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Page/Layout/navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NotFound from './Page/Not Found/NotFound'
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";

function App() {
  return (
      <Router>

    <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/add/user" component={AddUser}/>
            <Route exact path="/user/edit/:id" component={EditUser}/>
            <Route component={NotFound}/>
        </Switch>

    </div>
      </Router>
  );
}

export default App;
