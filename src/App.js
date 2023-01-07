import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "pages/main";
import { Header } from 'components/header';
import { NotFound } from 'pages/notfound';
import Post from 'pages/post';
import Login from 'pages/login';
import Board from 'pages/board';
import Viewer from 'pages/view';
import 'styles/globals.css';
import Register from 'pages/register';
import { createContext, useEffect, useState } from 'react';
import Mypage from 'pages/mypage';
import axios from 'axios';


export const LoginContext = createContext({login:-1, setLogin:()=>{}})
function App() {
  const [login, setLogin] = useState(sessionStorage.getItem("login") ? sessionStorage.getItem("login") : -1);

  useEffect(() => {
    if(login > -1){
      const URL = `/api/users/${login}`;
      const auth = async () => {
        await axios.get(URL)
        .then(res => {
          setLogin(prev => prev);
        })
        .catch(err => {
          console.log(err);
          sessionStorage.removeItem("login");
          setLogin(-1);
        })
      }
      auth();
    }
  }, [login])
  
  return (
    <LoginContext.Provider value={{login:login, setLogin:setLogin}}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
            <Route path="/board" element={<Board/>}></Route>
            <Route path="/view/:id" element={<Viewer/>}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
