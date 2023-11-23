import './App.css';
import Login from './Components/login'
import {Routes,Route} from 'react-router-dom'
import Combine from './Components/Combine';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Combine/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
