import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';

function App() {
  
  const [{}, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>>> ', authUser);
      if (authUser) {
        // User is Logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //User is logged out
        dispatch ({
          type: 'USER',
          user: null
        })
      }
    })

  }, [])

  return (
    

    <Router>
      <div className="App">

      <Switch>

        <Route path="/login">
          <Login/>
        </Route>
        
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/">  
          <Header/>
          <Home/>
        </Route>


      </Switch>

      </div>  
    </Router>
  );
}

export default App;
