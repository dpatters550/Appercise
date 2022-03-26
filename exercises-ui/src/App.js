import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react'

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="top-header"> 
              <h1> Exercise Tracker Website </h1>
              <p>
                Use the options below to add, edit, or delete an exercise.
              </p>
        </header>
        <Navigation />

        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
          </div>
          <footer id="hubbar2">
            
            
            <p>&copy; 2022 Daquan Patterson.</p>

            
          </footer>
      </Router>
    </div>
  );
}

export default App;