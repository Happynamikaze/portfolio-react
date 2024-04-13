import logo from './logo.svg';
import './App.css';
import './css/global.css'
import Homepage from './pages/homepage/homepage';
import { BrowserRouter, Route, Router, Routes,  } from 'react-router-dom';


function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Homepage/>}/>
      </Routes>
    
        
      </BrowserRouter>
   </>
  );
}

export default App;
