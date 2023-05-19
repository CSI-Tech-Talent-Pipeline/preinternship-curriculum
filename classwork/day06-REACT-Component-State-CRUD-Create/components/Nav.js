import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='m-5'>
        <ul className="nav m-5 justify-content-center" >
           <Link to="/home">
            <li className="nav-item nav-link active">
                    HOME
                </li>
            </Link>

            <Link to="/add">
                <li className="nav-item nav-link">
                ADD
            </li>
            </Link>

            <Link to="/list">
            <li className="nav-item nav-link">
                LIST
            </li>
            </Link>
      
        </ul>
        </nav>
    )
}
