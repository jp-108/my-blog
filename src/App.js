import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import Updateblog from "./components/Updateblog";

function App() {
  return (
    <div className='App overflow-auto'>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Hero />} path='/' />
          <Route element={<Blogs />} path='/blogs' />
          <Route element={<AddBlog />} path='/newblog' />
          <Route element={<Updateblog />} path='/update/:id' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
