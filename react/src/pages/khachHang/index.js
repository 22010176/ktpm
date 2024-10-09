import SideNavbar from '../../components/sidebarA'
import ToolbarA from '../../components/toolbarA'
import TableA from '../../components/tableA'

import styles from './style.module.css'
import { useRef, useState } from 'react'

const data = [
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
]
const headers = ["Mã KH", "Tên khách hàng", "Ngày sinh", "Địa chỉ", "Email", "Số điện thoại", "Ngày tham gia"]
const mapping = ["ma", "ten", "ngaySinh", "diaChi", "email", "sdt", "ngayThamGia"]


function KhachHangModal({ title, submitBtnTitle, onSubmit }) {
  const parents = useRef(), hideBtn = useRef();
  const [data, setData] = useState({
    "ma": undefined, "ten": "", "ngaySinh": "", "diaChi": "", "email": "", "sdt": "", "ngayThamGia": ""
  })

  function inputOnChange(e) {
    const elem = e.target, key = elem.name;
    setData(src => ({ ...src, [key]: elem.value }));
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    // điều kiện tắt modal và xóa input là hàm submit không phải function hoặc nó là function và kết quả trả về khác false
    try {
      if (!await onSubmit({ ...data })) return;
      setData({ "ma": undefined, "ten": "", "ngaySinh": "", "diaChi": "", "email": "", "sdt": "", "ngayThamGia": "", })
      hideBtn.current.click();
    } catch (error) {
      hideBtn.current.click();
    }
  }
  return (
    <div ref={parents} className="modal-dialog modal-dialog-centered modal-dialog-scrollable border-0 modal-lg">
      <div className="modal-content">
        <div className='modal-header bg-primary text-light'>
          <div className='container-fluid text-center'>
            <h2 className='p-2 fw-semibold'>{title}</h2>
          </div>
        </div>

        <div className='modal-body'>
          <form className='container-fluid d-flex flex-column px-5 gap-3'>
            <div className="row">
              <label htmlFor="hoTen" className="form-label p-0">Họ và tên</label>
              <input type="text" className="form-control" name='ten' value={data.ten} onChange={inputOnChange} id="hoTen" />
            </div>
            <div className="row">
              <label htmlFor="ngaySinh" className="form-label p-0">Ngày sinh</label>
              <input type="date" className="form-control" name='ngaySinh' value={data.ngaySinh} onChange={inputOnChange} id="ngaySinh" />
            </div>
            <div className="row">
              <label htmlFor="diaChi" className="form-label p-0">Địa chỉ</label>
              <input type="text" className="form-control" name='diaChi' value={data.diaChi} onChange={inputOnChange} id="diaChi" />
            </div>
            <div className="row">
              <label htmlFor="soDienThoai" className="form-label p-0">Số điện thoại</label>
              <input type="tel" className="form-control" name='sdt' value={data.sdt} onChange={inputOnChange} id="soDienThoai" />
            </div>
            <div className="row">
              <label htmlFor="userEmail" className="form-label p-0">Email</label>
              <input type="email" className="form-control" name='email' value={data.email} onChange={inputOnChange} id="userEmail" />
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <div className='container-fluid d-flex justify-content-center gap-5'>
            <button type="button" className="btn btn-primary w-25" onClick={onFormSubmit}>
              {submitBtnTitle}
            </button>
            <button ref={hideBtn} type="button" className="btn btn-danger w-25" data-bs-dismiss="modal" aria-label="Close">
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default function KhachHang() {
  const [rowClick, setRowClick] = useState({});
  function onAdd(data) {
    console.log(data)
    return true
  }
  function onEdit(data) {
    console.log(data)
    return true
  }
  function onDelete(data) {
    console.log({ data, rowClick })
  }
  return (
    <main className={[styles.container, "container-fluid vw-100 vh-100 bg-info-subtle"].join(" ")}>
      <div className='row h-100'>
        <div className={[styles.side_bar, 'col-auto h-100'].join(" ")}>
          <div className='row h-100'>
            <SideNavbar />
          </div>
        </div>

        {/* Công cụ + Bảng dữ liệu */}
        <div className={[styles.main_content, "col-auto bg-info-subtle h-100 py-3 px-4 d-flex flex-column gap-4"].join(" ")}>
          {/* Thanh công cụ */}
          <div className={[styles.tools_bar, "row"].join(" ")}>
            <ToolbarA
              onDelete={onDelete}
              AddModal={<KhachHangModal title={"THÊM KHÁCH HÀNG"} submitBtnTitle={"Thêm khách hàng"} onSubmit={onAdd} />}
              EditModal={<KhachHangModal title={"SỬA KHÁCH HÀNG"} submitBtnTitle={"Lưu thông tin"} onSubmit={onEdit} />} />
          </div>

          {/* Bảng dữ liệu */}
          <div className={[styles.table_wrapper, "bg-light rounded-2 row"].join(" ")}>
            <TableA headers={headers} data={data} mapping={mapping} onClick={setRowClick} />
          </div>
        </div>
      </div>
    </main>
  )
}