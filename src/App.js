import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import OrderReview from './Components/OrderReview/OrderReview';
import Grandpa from './Components/Grandpa/Grandpa';
import Father from './Components/Father/Father';
import Uncle from './Components/Uncle/Uncle';
import Aunty from './Components/Aunty/Aunty';
import Page404 from './Components/Page404/Page404';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
        <Route path='/father' element={<Father></Father>}></Route>
        <Route path='/uncle' element={<Uncle></Uncle>}></Route>
        <Route path='/aunty' element={<Aunty></Aunty>}></Route>
        <Route path='*' element={<Page404></Page404>} ></Route>

      </Routes>
      
    </div>
  );
}

export default App;
