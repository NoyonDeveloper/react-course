import React, { useState } from 'react';
import './App.css';
import Course from './Components/Course/Course';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Course></Course>
    </div>
  );
}

export default App;
