import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List'

import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>} />
            <Route path='login' element={ <Login/>} />
            <Route path='users'>
              <Route index element={<List/>}></Route>
              <Route path=':userId' element={<Single/>}></Route>
              <Route path='new' element={<New/>}></Route>
            </Route>
            <Route path='products'>
              <Route index element={<List/>}></Route>
              <Route path=':productId' element={<Single/>}></Route>
              <Route path='new' element={<New/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
