
import Home from './Pages/Home/Home';
import Main from './Main';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {

  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Main/>}/>
        <Route path="/hotel" element={<Home/>} />
     
       
      </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;
