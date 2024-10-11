import styles from './style.module.css'

export default function TableA({ onClick, data = [], headers = [], mapping = [] }) {
  function rowOnClick(e) {
    e.stopPropagation()

    const elem = e.target.parentElement
    clearSelect()
    elem.classList.add("table-active")

    if (typeof onClick != 'function') return
    onClick(Object.fromEntries([...elem.querySelectorAll("td")].map(i => [i.getAttribute("data-key"), i.getAttribute("data-value")])))
  }

  function clearSelect() {
    document.querySelectorAll(".table-active").forEach(element => element.classList.remove("table-active"));
    if (typeof onClick == 'function') onClick(null)
  }
  return (
    <div className="container-fluid rounded p-0" onClick={clearSelect}>
      <table className="table table-bordered table-hover">
        <thead className='table-primary'>
          <tr className='text-center'>
            {headers.map((i, j) => <th scope='col' key={j} >{i}</th>)}
          </tr>
        </thead>
        <tbody className={[styles.table_body, "table-group-divider"].join(" ")} onClick={rowOnClick}>
          {data.map((item, j) => (
            <tr className={[styles.table_row].join(" ")} key={j} >
              {mapping.map((key, _j) => <td key={_j} data-key={key} data-value={item[key]} >{item[key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}