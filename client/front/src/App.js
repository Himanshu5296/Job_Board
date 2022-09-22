import { Route, Routes } from 'react-router-dom';
import './App.css';
import Apply from './Components/Apply';
import Home from './Components/Home';
import JobDetails from './Components/JobDetails';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/jobs/:id" element={<JobDetails/>}></Route>
      <Route path="/apply" element={<Apply/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
