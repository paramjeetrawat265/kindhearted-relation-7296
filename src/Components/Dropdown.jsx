import React, { useState } from 'react'
import { DropdownData } from './DropdownData'
import { Link } from "react-router-dom"
import styles from "../Styles/Dropdown.module.css"
const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <ul className={dropdown ? styles.submenuClicked : styles.submenu} onClick={() => setDropdown(!dropdown)}>
            {DropdownData.map(({ title }) => (
                <li key={title}>
                    <Link to="" className={styles.cName} onClick={()=>setDropdown(false)}>{title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Dropdown