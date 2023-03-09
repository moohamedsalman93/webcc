import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom' ;
import BlogPost from './components/BlogPost';
import Header from './components/Header';
import NewBlog from './components/NewBlog';
import NoBlog from './components/NoBlog';
import SideBar from './components/SideBar';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import Storage from './pages/Storage';


function App() {

  return (
    <BrowserRouter>
      
        <Header/>
          <Routes>
            <Route path='/' element={<SideBar/>}>
              <Route path='/' element={<NoBlog/>}/>
              <Route path="Blog" element={<Blog/>}>
                <Route path="newblog" element={< NewBlog/>} />
                <Route path=":id" element={<BlogPost />} />
              </Route>
              <Route path="Storage" element={<Storage/>}/>
              <Route path="Pages" element={<Pages/>}/>
            </Route>
          </Routes>
      
    </BrowserRouter>
  );
}

export default App;
