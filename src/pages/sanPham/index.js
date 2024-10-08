import styles from './style.module.css';
import SideNavbar from '../../components/sidebarA';
import ToolbarA from '../../components/toolbarA';
import TableA from '../../components/tableA';

const data = [
  { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
  { maSP: "atest", ten: "aaa", thuongHieu: "Dd", hdh: "aaa", pbHDH: "aaa", xuatXu: "test" },
]
const headers = ["Mã", "Tên sản phẩm", "Thương hiệu", "Hệ điều hành", "Phiên bản HDH", "Xuất xứ"]
const mapping = ["maSP", "ten", "thuongHieu", "hdh", "pbHDH", "xuatXu"]

export default function SanPham() {
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
            <ToolbarA />
          </div>

          {/* Bảng dữ liệu */}
          <div className={[styles.table_wrapper, "bg-light rounded-2 row"].join(" ")}>
            <TableA headers={headers} data={data} mapping={mapping} keyID='maSP' />
          </div>
        </div>
      </div>
    </main>
  );
}
