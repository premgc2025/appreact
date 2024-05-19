
import './App.css'
import Header from './components/Header'
import Image from './components/Image'
import Treking from './components/Treking'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {


  return (
    <div className="trekNepal">
      <BrowserRouter basename="/appreact">
  <Header/>
  <Routes>
    <Route path="/treking" element={<Treking/>}/>
 
  

  </Routes>
  <Image/>

  </BrowserRouter>

    </div>
    
  )
}

export default App
