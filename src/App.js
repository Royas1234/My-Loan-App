<<<<<<< HEAD

import './App.css';

function App() {
return("hello world");
};
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import Pricing from './Pages/Pricing/Pricing'
import Blog from './Pages/Blog/Blog'
import Register from './components/register'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
>>>>>>> d0137669d7928d20372c2755f8124b345c6fbfc5

export default App;
