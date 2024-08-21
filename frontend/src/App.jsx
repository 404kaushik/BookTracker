import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/CreateBook';
import Edit from './pages/EditBook';
import Delete from './pages/DeleteBook';
import Show from './pages/ShowBook';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books/create' element={<Create />}></Route>
      <Route path='/books/details/:id' element={<Show />}></Route>
      <Route path='/books/edit/:id' element={<Edit />}></Route>
      <Route path='/books/delete/:id' element={<Delete />}></Route>
    </Routes>
  )
}

export default App;