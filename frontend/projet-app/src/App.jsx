import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeM from './page/HomeM';
import  Contact from './page/Contact';
import About from './page/About';
import Blog from './page/Blog';
import Dsh from './page/Dsh'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element= {<HomeM />} />
        <Route path="/" element={<HomeM />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Dsh />} />
      </Routes>
    </BrowserRouter>
  )
}
