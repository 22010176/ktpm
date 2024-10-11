import { useEffect, useRef, useState, useContext, createContext } from 'react'
import { faCirclePlus, faPencil, faTrashCan, faHouse, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';

import SideNavbar from '../../components/sidebarA'
import ToolbarB from '../../components/toolbarA/temp'
import { ToolBtnB } from '../../components/Button/ToolBtn'

import styles from './style.module.css'
import { khachHangAPI } from '../../api'
import TableB from '../../components/tableA/temp';

const KhachHangContext = createContext({})
const defaultKhachHang = { "ma": null, "ten": "", "ngaySinh": "", "diaChi": "", "email": "", "sdt": "" }

function KhachHangModal({ title, submitBtnTitle, onSubmit }) {
  const parents = useRef(), hideBtn = useRef();
  const [data, setData] = useContext(KhachHangContext)

  function inputOnChange(e) {
    const elem = e.target, key = elem.name;
    setData(src => ({ ...src, [key]: elem.value || "" }));
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (typeof onSubmit != 'function') return

    let result = await onSubmit(data)
    if (result) hideBtn.current.click()
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

const newHd = [
  { key: "Mã KH", value: "ma" },
  { key: "Tên khách hàng", value: "ten" },
  { key: "Ngày sinh", value: "ngaySinh" },
  { key: "Địa chỉ", value: "diaChi" },
  { key: "Email", value: "email" },
  { key: "Số điện thoại", value: "sdt" },
  { key: "Ngày tham gia", value: "ngayThamGia" },
]
const navLinks = [
  { title: "Trang chủ", id: "trangChu", link: "/", icon: faHouse, links: [] },
  {
    title: "Quản lý đối tác", id: "doiTac", icon: faHandshakeSimple,
    links: [{ title: "Khách hàng", href: "/khach-hang" },]
  },
]

export default function KhachHang() {
  const [data, setData] = useState({ ...defaultKhachHang })
  const [tableData, setTableData] = useState([]);
  const [rowClick, setRowClick] = useState();

  const addBtn = useRef(), editBtn = useRef(), deleteBtn = useRef()

  useEffect(function () {
    getKhachHangData()
  }, [])


  useEffect(function () {
    if (rowClick) {
      editBtn.current.setAttribute("data-bs-target", "#editModal")
      deleteBtn.current.removeAttribute("data-bs-toggle")
      deleteBtn.current.removeAttribute("data-bs-target")
      return
    }

    editBtn.current.setAttribute("data-bs-target", "#errorModal")
    deleteBtn.current.setAttribute("data-bs-toggle", "modal")
    deleteBtn.current.setAttribute("data-bs-target", "#errorModal")
  }, [rowClick])

  async function getKhachHangData() {
    setTableData([])
    setRowClick(undefined)
    khachHangAPI.GET().then(result => setTableData(result.body))
  }

  function updateFormData(data) {
    if (!data) return
    setData({ ...data })
  }

  function onRowClick(data) {
    setRowClick(data);
  }

  async function onAdd(data) {
    const result = await khachHangAPI.PUT(data);
    getKhachHangData()

    if (result.message !== "Success") return false;

    updateFormData(defaultKhachHang)
    return true;
  }

  async function onEdit(data) {
    const result = await khachHangAPI.POST(data)
    getKhachHangData();

    if (result.message !== "Success") return false;

    updateFormData(defaultKhachHang)
    return true;
  }

  async function onDelete(e) {
    const result = await khachHangAPI.DELETE(rowClick)
    getKhachHangData();

    if (result.message !== "Success") return false;

    updateFormData(defaultKhachHang)
    return true;
  }
  return (
    <main className={[styles.container, "container-fluid vw-100 vh-100 bg-info-subtle"].join(" ")}>
      <div className='row h-100'>
        <div className={[styles.side_bar, 'col-auto h-100'].join(" ")}>
          <div className='row h-100'>
            <SideNavbar navItem={navLinks} />
          </div>
        </div>

        {/* Công cụ + Bảng dữ liệu */}
        <div className={[styles.main_content, "col-auto bg-info-subtle h-100 py-3 px-4 d-flex flex-column gap-4"].join(" ")}>
          {/* Thanh công cụ */}
          <div className={[styles.tools_bar, "row"].join(" ")}>
            <ToolbarB>
              <ToolbarB.Tools>
                <ToolBtnB ref={addBtn} color="#63e6be" icon={faCirclePlus} title="Thêm" data-bs-toggle="modal" data-bs-target="#addModal" />
                <ToolBtnB ref={editBtn} color="#e69138" icon={faPencil} title="Sửa" data-bs-toggle="modal" data-bs-target="#editModal" onClick={updateFormData.bind({}, rowClick)} />
                <ToolBtnB ref={deleteBtn} color="#ffd43b" icon={faTrashCan} title="Xóa" onClick={onDelete} />
              </ToolbarB.Tools>

              <ToolbarB.SearchForm>
                <div>
                  <select className="form-select">
                    <option defaultValue>Tên</option>
                    <option value="1">Thương hiệu</option>
                    <option value="2">Hệ điều hành</option>
                  </select>
                </div>
                <div>
                  <input className="form-control" type="text" placeholder="Tìm kiếm" aria-label="default input example" />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary w-100">Tìm kiếm</button>
                </div>
              </ToolbarB.SearchForm>
            </ToolbarB>
          </div>

          {/* Bảng dữ liệu */}
          <div className={[styles.table_wrapper, "bg-light rounded-2 row"].join(" ")}>
            <TableB headers={newHd} data={tableData} onClick={onRowClick} />
          </div>
        </div>
      </div>

      <KhachHangContext.Provider value={[data, setData]}>
        <div className='modal fade' id='errorModal' tabIndex={-1}>
          <EditNoSelectErrorModal />
        </div>
        <div className='modal fade' id='addModal' tabIndex={-1}>
          <KhachHangModal title="THÊM THÔNG TIN KHÁCH HÀNG" submitBtnTitle="Thêm khách hàng" onSubmit={onAdd} />
        </div>
        <div className='modal fade' id='editModal' tabIndex={-1}>
          <KhachHangModal title="CHỈNH SỬA THÔNG TIN KHÁCH HÀNG" submitBtnTitle="Lưu thông tin" onSubmit={onEdit} />
        </div>
      </KhachHangContext.Provider>
    </main>
  )
}