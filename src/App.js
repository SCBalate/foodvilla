
import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Cart from './Component/Cart';
import RestaurentDetails from './Component/RestaurentDetails';
import Error from './Component/Error';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path="/restaurant/:id" element={<RestaurentDetails/>} />
        <Route path='/about us' element={<AboutUs/>} />
        <Route path='/contact us' element={<ContactUs/> } />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
