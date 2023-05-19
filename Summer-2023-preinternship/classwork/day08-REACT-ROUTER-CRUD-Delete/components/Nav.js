import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <ul className="nav m-5 justify-content-center" >
           <Link to="/">
            <li className="nav-item">
                    <a className="nav-link active" href="#">HOME</a>
                </li>
            </Link>

            <Link to="/add">
                <li className="nav-item">
                <a className="nav-link" href="#">ADD</a>
            </li>
            </Link>

            <Link to="/list">
            <li className="nav-item">
                <a className="nav-link" href="#">LIST</a>
            </li>
            </Link>
      
        </ul>
    )
}
