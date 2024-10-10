import SideNavbar from '../../components/sidebarA'
import ToolbarA from '../../components/toolbarA'
import TableA from '../../components/tableA'

import styles from './style.module.css'
import { useEffect, useRef, useState } from 'react'
import { khachHangAPI } from '../../api'



const defaultKhachHang = { "ma": undefined, "ten": "", "ngaySinh": "", "diaChi": "", "email": "", "sdt": "", "ngayThamGia": "" }
function KhachHangModal({ title, submitBtnTitle, onSubmit, initialValue = {} }) {
  const parents = useRef(), hideBtn = useRef();
  const [data, setData] = useState(Object.assign(defaultKhachHang, initialValue))


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
      console.log(error)
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


function EditNoSelectErrorModal() {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title text-danger fw-bold">LỖI</h3>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Hãy chọn 1 sản phẩm.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  )
}

const headers = ["Mã KH", "Tên khách hàng", "Ngày sinh", "Địa chỉ", "Email", "Số điện thoại", "Ngày tham gia"]
const mapping = ["ma", "ten", "ngaySinh", "diaChi", "email", "sdt", "ngayThamGia"]

export default function KhachHang() {
  const errorBtn = useRef();
  const [tableData, setTableData] = useState([]);
  const [rowClick, setRowClick] = useState();

  useEffect(function () {
    getKhachHangData()
  }, [])


  async function getKhachHangData() {
    setTableData([])
    await khachHangAPI.GET().then(a => setTableData(a.body))
  }

  function onRowClick(data) {
    setRowClick(data);
  }

  async function onAdd(data) {
    const result = await khachHangAPI.PUT(data)
    if (result.message !== "Success") return false;

    setRowClick(defaultKhachHang);
    getKhachHangData();
    return true
  }

  async function onEdit(data) {
    const result = await khachHangAPI.POST(data)
    if (result.message !== "Success") return false;

    setRowClick(defaultKhachHang);
    getKhachHangData()
    return true
  }

  async function onDelete(e) {
    if (!rowClick) errorBtn.current.click();
    const result = await khachHangAPI.DELETE(rowClick)

    await getKhachHangData()
    return result.message === "Success"
  }
  return (
    <main className={[styles.container, "container-fluid vw-100 vh-100 bg-info-subtle"].join(" ")}>
      <div ref={errorBtn} className='d-none' data-bs-toggle="modal" data-bs-target="#errorModal"></div>
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
              EditModal={<KhachHangModal title={"SỬA KHÁCH HÀNG"} submitBtnTitle={"Lưu thông tin"} onSubmit={onEdit} initialValue={{ ...rowClick }} />} />
          </div>

          {/* Bảng dữ liệu */}
          <div className={[styles.table_wrapper, "bg-light rounded-2 row"].join(" ")}>
            <TableA headers={headers} data={tableData} mapping={mapping} onClick={onRowClick} />
          </div>
        </div>
      </div>

      <div className='modal fade' id='errorModal' tabIndex={-1}>
        <EditNoSelectErrorModal />
      </div>
    </main>
  )
}