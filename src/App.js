
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Pages/Header';
import TodoTask from './Components/Pages/TodoTask';
import Login from './Components/Login/Login'
import SignUp from './Components/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllTask from './Components/Pages/AllTask';
import RequireAuth from './Components/Pages/RequireAuth'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <TodoTask></TodoTask>
          </RequireAuth>

        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/alltask' element={<AllTask></AllTask>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
