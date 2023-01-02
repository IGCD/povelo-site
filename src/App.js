import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "pages/main";
import { Header } from 'components/header';
import { NotFound } from 'pages/notfound';
import Post from 'pages/post';
import Login from 'pages/login';
import 'styles/globals.css';
import Register from 'pages/register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
