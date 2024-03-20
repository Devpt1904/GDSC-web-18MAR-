import logo from './logo.svg';
import './App.css';
import Text from './components/Text'
import Profile from './screen/Profile';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [isLogin, setIsLogin] = useState(false)
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
          <Route path='/' element={<Login setIsLogin={setIsLogin} />}/>
          <Route path='/register' element={<Register isLogin={isLogin} />}/>
          <Route path='/home' element = {<Home  e/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
