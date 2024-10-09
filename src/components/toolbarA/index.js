import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { v4 } from 'uuid';

import styles from './style.module.css'

export default function ToolbarA({ AddModal, EditModal, DeleteModal }) {
  const modalID = v4()
  // tool btns
  const addBtn = useRef();
  const editBtn = useRef();
  const deleteBtn = useRef();

  // search btns
  const findSelect = useRef();
  const findInput = useRef();
  const findBtn = useRef();

  return (
    <div className={["d-flex justify-content-between bg-light border-bottom border-start border-2 border-info-subtle rounded"].join(" ")}>
      {/* Công cụ */}
      <div className={[styles.tools, "d-flex gap-2"].join(" ")}>
        <div className={["btn d-flex my-3 flex-column text-center justify-content-between align-item-center"].join(" ")} ref={addBtn} data-bs-toggle="modal" data-bs-target={"#addModal" + modalID} >
          <FontAwesomeIcon icon={faCirclePlus} color="#63e6be" className={[styles.tool_icon].join(" ")} />
          <p className={["m-0 fw-bold"].join(" ")}> Thêm </p>
        </div>
        <div className={["btn d-flex my-3 flex-column text-center justify-content-between align-item-center"].join(" ")} ref={editBtn} data-bs-toggle="modal" data-bs-target={"#editModal" + modalID}>
          <FontAwesomeIcon icon={faPencil} color="#e69138" className={[styles.tool_icon].join(" ")} />
          <p className={["m-0 fw-bold"].join(" ")}> Sửa </p>
        </div>
        <div className={["btn d-flex my-3 flex-column text-center justify-content-between align-item-center"].join(" ")} ref={deleteBtn}>
          <FontAwesomeIcon icon={faTrashCan} color="#ffd43b" className={[styles.tool_icon].join(" ")} />
          <p className={["m-0 fw-bold"].join(" ")}> Xóa </p>
        </div>
      </div>

      {/* Tìm kiếm */}
      <form className={[styles.search, ""].join(" ")}>
        <div className='d-flex gap-2 align-items-center justify-content-end h-100'>
          <div className=''>
            <select ref={findSelect} className="form-select">
              <option defaultValue>Tên</option>
              <option value="1">Thương hiệu</option>
              <option value="2">Hệ điều hành</option>
            </select>
          </div>
          <div className='' ref={findInput} >
            <input className="form-control" type="text" placeholder="Tìm kiếm" aria-label="default input example" />
          </div>
          <div className='' ref={findBtn} >
            <button type="submit" className="btn btn-primary w-100">Tìm kiếm</button>
          </div>
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