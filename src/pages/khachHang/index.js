import SideNavbar from '../../components/sidebarA'
import ToolbarA from '../../components/toolbarA'
import TableA from '../../components/tableA'

import styles from './style.module.css'

const data = [
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  { "ma": "123", "ten": "123", "ngaySinh": "df", "diaChi": "fd", "email": "d", "sdt": "12323", "ngayThamGia": "1/2/3" },
  // { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  // { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  // { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  // { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
]
const headers = ["Mã KH", "Tên khách hàng", "Ngày sinh", "Địa chỉ", "Email", "Số điện thoại", "Ngày tham gia"]
const mapping = ["ma", "ten", "ngaySinh", "diaChi", "email", "sdt", "ngayThamGia"]

function AddModal() {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  )
}

export default function KhachHang() {
  return (
    <>
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
              <ToolbarA AddModal={<AddModal />} />
            </div>

            {/* Bảng dữ liệu */}
            <div className={[styles.table_wrapper, "bg-light rounded-2 row"].join(" ")}>
              <TableA headers={headers} data={data} mapping={mapping} keyID='maSP' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}