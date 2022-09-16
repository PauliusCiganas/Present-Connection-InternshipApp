import './App.css';
import React, {} from 'react';

import { Home } from './Home';
import { ToDo } from './ToDo';
// import { ToDoDetails } from'./ToDoDetails'
import { Navigation } from './Navigation';

import{BrowserRouter , Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
      <Navigation/>
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/todo' element={<ToDo/>} />
        {/* <Route path = '/details/:id' element={<ToDoDetails/>} /> */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
