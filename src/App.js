import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Read from './pages/Read';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Menu from './components/Menu';
import Footer from './components/Footer';
import LoadingView from './components/Skelation';
import InsertProduct from './pages/InsertProduct';

function App() {
  return (
    <div className='container-fluid bg-light p-0'>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/me' element={<AboutMe />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='/create/product' element={<InsertProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
