import { BrowserRouter, Route, Routes } from 'react-router-dom';

import KhachHang from './khachHang';
import SanPham from './sanPham';
import NhaCungCap from './nhaCungCap';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={1} />
        <Route path='/san-pham' element={<SanPham />} />
        <Route path='/thuoc-tinh' element={<h1>thuoc tinh</h1>} />
        <Route path='/khach-hang' element={<KhachHang />} />
        <Route path='/nha-cung-cap' element={<NhaCungCap />} />
      </Routes>
    </BrowserRouter>
  );
}
