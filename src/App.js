
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Container1 from './Components/container1/Container1'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route 
    path='/' 
    element={[<Navbar />, <Container1 />]} />
    <Route 
    path='/login'
    element/>
    <Route 
    path='/signin'
    element/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
