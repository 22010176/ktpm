import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faWarehouse, faAngleRight, faRightFromBracket, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css'

const navLinks = [
  { title: "Trang chủ", id: "trangChu", link: "/", icon: faHouse, links: [] },
  {
    title: "Quản lý sản phẩm", id: "sanPham", icon: faWarehouse, links: [
      { title: "Sản phẩm", href: "/san-pham" },
      { title: "Thuộc tính", href: "/thuoc-tinh" },
    ]
  },
  {
    title: "Quản lý đối tác", id: "doiTac", icon: faHandshakeSimple, links: [
      { title: "Nhà cung cấp", href: "/nha-cung-cap" },
      { title: "Khách hàng", href: "/khach-hang" },
    ]
  },
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
          {navLinks.map(item => (
            <div className="accordion-item bg-light" key={item.title}>
              <div className="accordion-header">
                <div className={[styles.nav_header, "collapsed px-4 py-2"].join(" ")} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`} aria-expanded="false">
                  <FontAwesomeIcon className={styles.nav_icon} icon={item.icon} />
                  {item.links.length > 0 ?
                    <>
                      <p className="fs-5 fw-semibold my-0">{item.title}</p>
                      <FontAwesomeIcon className={styles.arrow_icon} icon={faAngleRight} />
                    </>
                    : <a className="fs-5 fw-semibold my-0 text-decoration-none" href={item.link}>{item.title}</a>
                  }
                </div>
              </div>

              {item.links.length > 0 && <div id={item.id} className="accordion-collapse collapse" >
                <div className="accordion-body py-0 px-4">
                  <ul>
                    {item.links.map(link => (
                      <li className={["py-1"].join(" ")}><a className='text-decoration-none' href={link.href} key={link.href}>{link.title}</a></li>
                    ))}
                  </ul>
                </div>
              </div>}
            </div>
          ))}
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