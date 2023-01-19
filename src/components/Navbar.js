import React from 'react'
import icon from './icon.png'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <div className='d-inline bg-light py-1 px-1 mx-2 rounded-circle'>
                        <img src={icon} alt="Logo" width="35" height="28" className="d-inline-block align-text-top" />
                    </div>
                    To Do List
                </a>
            </div>
        </nav>
    </div>
  )
}
