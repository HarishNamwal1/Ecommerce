import {Routes, Route} from 'react-router-dom';
import Header  from './components/layouts/Header';
import Home from './pages/Home';
import About from './pages/About-us';
import Terms from './pages/Terms';
import ContactUs from './pages/Contact-us';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/Forgot-password';
import Footer from './components/layouts/Footer';

function App() {
  return(
    <>
    <Header></Header>
   <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/terms' element ={<Terms/>}/>
    <Route path='/contact-us' element ={<ContactUs/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/register' element ={<Register/>}/>
    <Route path='/forget-password' element ={<ForgetPassword/>}/>
  </Routes>
  <Footer></Footer>
    </>
  )
}

export default App;