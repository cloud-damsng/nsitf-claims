import { Route, Routes} from 'react-router-dom';
import './App.css';
//import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
//import Shop from './routes/shop/shop.component';
//import Checkout from './routes/checkout/checkout.component';

const App =()=> {
    
  return (
  <Routes>
   
  <Route index element={<Authentication/>}/>
  <Route path ='home' index  element={<Home/>}/>
         
  </Routes>
  );
  
};

export default App;

      //<Route index  element={<Home/>} />
      //<Route path = 'shop/*' element={<Shop/>} />
      //<Route path = 'auth' element={<Authentication/>} />
      //<Route path = 'checkout' element={<Checkout/>} />