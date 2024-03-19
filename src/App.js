import logo from './logo.svg';
import './App.css';
import Text from './components/Text'
import Profile from './screen/Profile';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div class="App">

       {/* <Text/>  */}
      {/* <Login/>  */}
      {/* <Register/>     */}
      {/* route == /login <Login /> */}
      {/*  route == /register <Register /> */}
      {/* <Profile/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
