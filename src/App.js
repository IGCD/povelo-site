import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "pages/main";
import { Header } from 'components/header';
import { NotFound } from 'pages/notfound';
import Post from 'pages/post';
import Login from 'pages/login';
import 'styles/globals.css';
import Register from 'pages/register';
import { createContext, useEffect, useState } from 'react';
import Mypage from 'pages/mypage';
import axios from 'axios';


export const LoginContext = createContext({login:false, setLogin:()=>{}})
function App() {
  const [login, setLogin] = useState(-1);

  useEffect(()=>{
    if(login > -1){
      const URL = `/api/users/${login}`;
      console.log(URL);
      axios.get(URL)
        .then(res => {
          console.log(res.data);
          setLogin(true);
        })
        .catch(err => {
          console.log(err);
          setLogin(-1);
        })
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
            <Route path="/board/:id" element={<Register />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
