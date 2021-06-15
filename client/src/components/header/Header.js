import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import './header.css'
import PappuGang from '../.././images/PappuGang.png'
const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light align-middle">

                <div className="navbar-left">
                    <Link to="/" className="logo" style={{ marginRight: '2rem' }}>
                        <h3 className="navbar-brand text-uppercase p-0 m-0"
                            onClick={() => window.scrollTo({ top: 0 })}>
                            P
                    </h3>

                        {/* <img src={PappuGang} alt="Pappu Gang" style={{ width: '50px', height: '30px' }} /> */}
                    </Link>

                    <Search />
                </div>
                <div className="navbar-right">
                    <Menu />
                </div>


            </nav>
        </div>
    )
}

export default Header
