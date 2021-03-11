import React from 'react';
import {Link} from 'react-router-dom'

function SidebarComponent(props) {
  return (
    <>
      <li className="nav-item">
        <Link to={props.href} className="nav-link">
          <i className={props.icon}></i>
          <span>{props.span}</span>
          </Link>
      </li>
    </>
  )
}

export default SidebarComponent