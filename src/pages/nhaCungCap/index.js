import SideNavbar from '../../components/sidebarA'
import ToolbarA from '../../components/toolbarA'
import TableA from '../../components/tableA'

import styles from './style.module.css'

const data = [
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  { "ma": "123", "ten": "123", "diaChi": "fd", "email": "d", "sdt": "12323" },
  // { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  // { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  // { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  // { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
]
const headers = ["Mã NCC", "Tên nhà cung cấp", "Địa chỉ", "Email", "Số điện thoại"]
const mapping = ["ma", "ten", "diaChi", "email", "sdt"]


function KhachHangForm() {
  return (
    <form className='container-fluid d-flex flex-column px-5 gap-3'>
      <div class="row">
        <label for="hoTen" class="form-label p-0">Họ và tên</label>
        <input type="email" class="form-control" id="hoTen" placeholder="" />
      </div>
      <div class="row">
        <label for="ngaySinh" class="form-label p-0">Ngày sinh</label>
        <input type="date" class="form-control" id="ngaySinh" placeholder="" />
      </div>
      <div class="row">
        <label for="diaChi" class="form-label p-0">Địa chỉ</label>
        <input type="email" class="form-control" id="diaChi" placeholder="" />
      </div>
      <div class="row">
        <label for="soDienThoai" class="form-label p-0">Số điện thoại</label>
        <input type="tel" class="form-control" id="soDienThoai" placeholder="" />
      </div>
      <div class="row">
        <label for="userEmail" class="form-label p-0">Email</label>
        <input type="email" class="form-control" id="userEmail" placeholder="" />
      </div>
    </form>
  )
}

function AddKhachHangModal({ modal_id }) {
  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable border-0 modal-lg">
      <div className="modal-content">
        <div className='modal-header bg-primary text-light'>
          <div className='container-fluid text-center'>
            <h2 className='p-2 fw-semibold'>THÊM KHÁCH HÀNG</h2>
          </div>
        </div>

        <div className='modal-body'>
          <KhachHangForm />
        </div>

        <div class="modal-footer">
          <div className='container-fluid d-flex justify-content-center gap-5'>
            <button type="button" class="btn btn-primary w-25" data-bs-dismiss="modal" aria-label="Close">
              Thêm khách hàng
            </button>
            <button type="button" class="btn btn-danger w-25" data-bs-dismiss="modal" aria-label="Close">
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

function EditModal() {
  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable border-0 modal-lg">
      <div className="modal-content">
        <div className='modal-header bg-primary text-light'>
          <div className='container-fluid text-center'>
            <h2 className='p-2 fw-semibold'>CHỈNH SỬA KHÁCH HÀNG</h2>
          </div>
        </div>

        <div className='modal-body'>
          <KhachHangForm />
        </div>

        <div class="modal-footer">
          <div className='container-fluid d-flex justify-content-center gap-5'>
            <button type="button" class="btn btn-primary w-25" data-bs-dismiss="modal" aria-label="Close">
              Lưu thông tin
            </button>
            <button type="button" class="btn btn-danger w-25" data-bs-dismiss="modal" aria-label="Close">
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default function NhaCungCap() {
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
              <ToolbarA AddModal={<AddKhachHangModal />} EditModal={<EditModal />} />
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