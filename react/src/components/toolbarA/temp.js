import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { v4 } from 'uuid';

import ToolBtn from '../Button/ToolBtn';
import styles from './style.module.css'

function ToolbarB({ tools, form, children }) {
  return (
    <div className={["d-flex justify-content-between bg-light border border-2 border-info-subtle rounded"].join(" ")}>
      {children}
    </div>
  )
}

ToolbarB.Tools = function ({ children }) {
  return (
    <div className={["d-flex gap-2"].join(" ")}>
      {children}
    </div>
  )
}

ToolbarB.SearchForm = function ({ children }) {
  return (
    <form className={["d-flex gap-2 align-items-center justify-content-end h-100"].join(" ")}>
      {children}
    </form>
  )
}


export default ToolbarB