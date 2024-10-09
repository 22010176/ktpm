import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faWarehouse, faAngleRight, faRightFromBracket, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css'

const navLinks = [
  { title: "Trang chủ", icon: faHouse, links: [] },
  { title: "Sản phẩm", icon: "", links: [{ title: "", href: "/" }] },
]

export default function SideNavbar() {
  return (
    <div className={["bg-light p-0 h-100"].join(" ")}>
      {/* Tài khoản */}
      <div className={[styles.account_sec, "d-flex gap-3 align-items-center border-bottom px-2 m-0"].join(" ")}>
        <div className={[styles.avatar, "align-self-center"].join(" ")}>
          <img className={[styles.avatar, "rounded-circle"].join(" ")} src='/img/logo.jpg' alt='' />
        </div>
        <div className={[].join(" ")}>
          <p className={["fs-6 fw-bold m-0"].join(" ")}>Nguyễn Anh Ngọc Minh</p>
          <p className={["fs-6 m-0"].join(" ")}>Quản lý kho</p>
        </div>
      </div>

      {/* Trang chủ */}
      <div className={[styles.nav_container].join(" ")}>
        <div className="row accordion accordion-flush p-0 m-0" >
          {/* Trang chủ */}
          <div className="accordion-item bg-light">
            <div className="accordion-header align-items-center px-4 py-2">
              <div className={[styles.nav_header,].join(" ")}>
                <FontAwesomeIcon className={styles.nav_icon} icon={faHouse} />
                <a href='/' className={["fs-5 text-decoration-none fw-semibold"].join(" ")}>
                  Trang chủ
                </a>
              </div>
            </div>
          </div>

          {/* Sản phẩm */}
          <div className="accordion-item bg-light">
            <div className="accordion-header">
              <div className={[styles.nav_header, "collapsed px-4 py-2"].join(" ")} type="button" data-bs-toggle="collapse" data-bs-target="#san-pham-nav" aria-expanded="false">
                <FontAwesomeIcon className={styles.nav_icon} icon={faWarehouse} />
                <p className="fs-5 fw-semibold my-0">Sản phẩm</p>
                <FontAwesomeIcon className={styles.arrow_icon} icon={faAngleRight} />
              </div>
            </div>
            <div id="san-pham-nav" className="accordion-collapse collapse" >
              <div className="accordion-body py-0 px-4">
                <ul>
                  <li className={["py-1"].join(" ")}><a className='text-decoration-none' href='/san-pham'>Sản phẩm</a></li>
                  <li className={["py-1"].join(" ")}><a className='text-decoration-none' href='/thuoc-tinh'>Thuộc tính</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Đối tác */}
          <div className="accordion-item bg-light">
            <div className="accordion-header">
              <div className={[styles.nav_header, "collapsed px-4 py-2"].join(" ")} type="button" data-bs-toggle="collapse" data-bs-target="#doi-tac-nav" aria-expanded="false">
                <FontAwesomeIcon className={styles.nav_icon} icon={faHandshakeSimple} />
                <p className="fs-5 fw-semibold my-0"> Quản lý đối tác</p>
                <FontAwesomeIcon className={styles.arrow_icon} icon={faAngleRight} />
              </div>
            </div>
            <div id="doi-tac-nav" className="accordion-collapse collapse" >
              <div className="accordion-body py-0 px-4">
                <ul>
                  <li className={["py-1"].join(" ")}><a className='text-decoration-none' href='/nha-cung-cap'>Nhà cung cấp</a></li>
                  <li className={["py-1"].join(" ")}><a className='text-decoration-none' href='/khach-hang'>Khách hàng</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Đăng xuất */}
        <div className="px-4 py-3 border-top">
          <div className={[styles.nav_header].join(" ")}>
            <FontAwesomeIcon className={styles.nav_icon} icon={faRightFromBracket} />
            <a href='/' className="fs-5 fw-semibold my-0 text-decoration-none">Đăng xuất</a>
          </div>
        </div>
      </div>
    </div>
  )
}