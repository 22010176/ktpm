import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { v4 } from 'uuid';

import styles from './style.module.css'
import ToolBtn from '../Button/ToolBtn';

export default function ToolbarA({ AddModal, EditModal, onDelete }) {
  const modalID = v4()
  const btnStyle = "btn d-grid gap-3 text-center align-self-center"
  const btnTitleStyle = "m-0 fw-bold"
  return (
    <div className={["d-flex justify-content-between bg-light border border-2 border-info-subtle rounded"].join(" ")}>
      {/* Công cụ */}
      <div className={["d-flex gap-2"].join(" ")}>
        <ToolBtn color="#63e6be" icon={faCirclePlus} title="Thêm" />
        {/* <div className={[btnStyle].join(" ")} data-bs-toggle="modal" data-bs-target={"#addModal" + modalID} >
          <FontAwesomeIcon icon={faCirclePlus} color="#63e6be" className={[styles.tool_icon].join(" ")} />
          <p className={[btnTitleStyle].join(" ")}> Thêm </p>
        </div> */}
        <div className={[btnStyle].join(" ")} data-bs-toggle="modal" data-bs-target={"#editModal" + modalID}>
          <FontAwesomeIcon icon={faPencil} color="#e69138" className={[styles.tool_icon].join(" ")} />
          <p className={[btnTitleStyle].join(" ")}> Sửa </p>
        </div>
        <div className={[btnStyle].join(" ")} onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashCan} color="#ffd43b" className={[styles.tool_icon].join(" ")} />
          <p className={[btnTitleStyle].join(" ")}> Xóa </p>
        </div>
      </div>

      {/* Tìm kiếm */}
      <form className={["d-flex gap-2 align-items-center justify-content-end h-100"].join(" ")}>
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
      </form>

      {/* Add Modal */}
      <div className="modal fade" id={"addModal" + modalID} tabIndex="-1" >
        {AddModal}
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id={"editModal" + modalID} tabIndex="-1" >
        {EditModal}
      </div>
    </div>
  )
}