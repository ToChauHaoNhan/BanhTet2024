import React from "react";

import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Luan_500k_page1 } from './Components/Luan_500k_page1';
import { Luan_500k_page4 } from './Components/Luan_500k_page4';
// import { Luan_500k_page3 } from './Components/Luan_500k_page3';
import { TestPopup } from './Page/TestPopup';
import { BanhTetProperties } from './Components/BanhTetProperties/BanhTetProperties';
import { TriNhan500k } from './Components/TriNhan500k/Landing';
import {NguyenLieu} from './Components/TriNhan500k/NguyenLieu';
import {HuongDan} from './Components/TriNhan500k/HuongDan';

function App() {
  const [finalForm, setFinalForm] = React.useState({})
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Luan_500k_page1/>} /> */}
          <Route path="/final" element={<Luan_500k_page4 finalForm = {finalForm} setFinalForm = {setFinalForm}/>} />
          {/* <Route path="/3" element={<Luan_500k_page3 />} /> */}
          <Route path="/pop-up" element={<TestPopup finalForm = {finalForm} setFinalForm = {setFinalForm}/>} />
          <Route path="/banhtet-properties" element={<BanhTetProperties />} />
          <Route path="/tri-nhan-500k" element={<TriNhan500k />} />
          <Route path="/nguyen-lieu" element={<NguyenLieu />} />
          <Route path="/huong-dan" element={<HuongDan />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
