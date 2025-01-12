import React from "react";

import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Luan_500k_page1 } from './Components/Luan_500k_page1';
import { Luan_500k_page4 } from './Components/Luan_500k_page4';
// import { Luan_500k_page3 } from './Components/Luan_500k_page3';
// import { TestPopup } from './Page/TestPopup';
import { BanhTetProperties } from './Components/BanhTetProperties/BanhTetProperties';
import { Landing } from './Components/TriNhan500k/Landing';
import {NguyenLieu} from './Components/TriNhan500k/NguyenLieu';
import {HuongDan} from './Components/TriNhan500k/HuongDan';
import { FinalPage } from './Page/FinalPage'

function App() {
  return (
    <div className="">
      <FinalPage />
    </div>
  )
}

export default App
