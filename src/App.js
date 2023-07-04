
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';
import Main from './Main';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {

  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Main/>}/>
        <Route path="/hotel" element={<Home/>} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;
