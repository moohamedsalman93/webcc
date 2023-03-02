import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom' ;
import Header from './components/Header';
import SideBar from './components/SideBar';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import Storage from './pages/Storage';


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <SideBar>
        <Routes>
          <Route path="Blog" element={<Blog/>}/>
          <Route path="Storage" element={<Storage/>}/>
          <Route path="Pages" element={<Pages/>}/>
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
