import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Luan_500k_page1 } from './Components/Luan_500k_page1';
import { Luan_500k_page2 } from './Components/Luan_500k_page2';
import { Luan_500k_page3 } from './Components/Luan_500k_page3';
function App() {
  return (
    <div className = "">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Luan_500k_page1 />} />
          <Route path="/2" element={<Luan_500k_page2 />} />
          <Route path="/3" element={<Luan_500k_page3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
