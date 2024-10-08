import { BrowserRouter, Route, Routes } from 'react-router-dom';

import KhachHang from './khachHang';
import SanPham from './sanPham';


export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={1} />
        <Route path='/san-pham' element={<SanPham />} />
        <Route path='/thuoc-tinh' element={<h1>thuoc tinh</h1>} />
        <Route path='/khach-hang' element={<KhachHang />} />
      </Routes>
    </BrowserRouter>
  );
}
