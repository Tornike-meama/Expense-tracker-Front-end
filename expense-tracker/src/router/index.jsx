import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header/index.jsx';
import {Home} from '../pages/Home/index';
import Login from '../pages/Login/index';

function MyRouter() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
