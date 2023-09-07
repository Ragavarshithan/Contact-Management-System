import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div className='container'>
                    < a href='/contact' className='navbar-brand'>Contact Manager</a>

                    <div className='ml-auto'>
                      <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <Link to='/login' className='nav-link'>
                          Login
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/register' className='nav-link'>
                          Register
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/contact' className='nav-link'>
                          Logout
                        </Link>
                        </li>
                      </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}
