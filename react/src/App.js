import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar always stays rendered/injected*/}
        <Navbar />
        <div className='content'>
          {/* Routes renders/injects only 1 component/Route at a time */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            {/* Any route except the top ones; should be at the very bottom as to catch */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
