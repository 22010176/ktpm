import { useRef, useState } from "react";

function FormModalA({ title, submitBtnTitle, defaultData = {}, onSubmit }) {
  const parents = useRef();
  const hideBtn = useRef();
  const [data, setData] = useState({ "ma": "", "hoTen": "", "diaChi": "", "email": "", "sdt": "" })

  function inputOnChange(e) {
    const elem = e.target, key = elem.name;
    setData(src => ({ ...src, [key]: elem.value }));
  }

  async function formSubmit(e) {
    e.preventDefault();
    // điều kiện tắt modal và xóa input là hàm submit không phải function hoặc nó là function và kết quả trả về khác false
    try {
      if (!await onSubmit({ ...data })) return;
      setData(defaultData)
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
              <input type="text" className="form-control" name='hoTen' value={data?.hoTen} onChange={inputOnChange} id="hoTen" />
            </div>
            <div className="row">
              <label htmlFor="diaChi" className="form-label p-0">Địa chỉ</label>
              <input type="text" className="form-control" name='diaChi' value={data?.diaChi} onChange={inputOnChange} id="diaChi" />
            </div>
            <div className="row">
              <label htmlFor="sdt" className="form-label p-0">Số điện thoại</label>
              <input type="tel" className="form-control" name='sdt' value={data?.sdt} onChange={inputOnChange} id="sdt" />
            </div>
            <div className="row">
              <label htmlFor="emailUser" className="form-label p-0">Email</label>
              <input type="email" className="form-control" name='email' value={data?.email} onChange={inputOnChange} id="emailUser" />
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <div className='container-fluid d-flex justify-content-center gap-5'>
            <button type="button" className="btn btn-primary w-25" onClick={formSubmit}>
              {submitBtnTitle}
            </button>
            <button type="button" className="btn btn-danger w-25" ref={hideBtn} data-bs-dismiss="modal" aria-label="Close" >
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}