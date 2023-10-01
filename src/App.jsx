import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Training from './components/Training';
import Treatment from './components/Treatment';
import Contact from './components/Contact';


function App() {
 

  return (
    <>
     <div className='' >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
     </div>
    
    </>
  )
}

export default App
