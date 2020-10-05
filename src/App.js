import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RegisteredEvent from './components/RegisteredEvent/RegisteredEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Error from './components/Error/Error';


export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [events, setEvents] = useState([]);
  const [registerEvent, setRegisterEvent] = useState({});

  useEffect(() => {
      fetch('https://nameless-inlet-35612.herokuapp.com/getEvents')
      .then(res => res.json())
      .then( data => setEvents(data))
      .catch(err => console.log(err))
  },[])

  console.log(events);

  const handleEvent = (eventData) => {
    const clickedEvent = events.find(item => item._id === eventData._id );
    setRegisterEvent(clickedEvent);
  }

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Switch>
        <Route exact path="/">
          <Home data={events} handleEvent={handleEvent}/>
        </Route>
        <Route exact path="/login/">
          <Login></Login>
        </Route>
        <PrivateRoute exact path="/register/">
          <Register eventInfo={registerEvent}></Register>
        </PrivateRoute>
        <PrivateRoute exact path="/volunteer/">
          <RegisteredEvent></RegisteredEvent>
        </PrivateRoute>
        <Route exact path="*">
          <Error></Error>
        </Route>
      </Switch>
    </userContext.Provider>
  );
}

export default App;
