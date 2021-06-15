import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar'
import NotifyModal from '../NotifyModal'
import HomeIcon from '@material-ui/icons/Home';
import { IconButton, Tooltip } from '@material-ui/core'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SettingsIcon from '@material-ui/icons/Settings';

const Menu = () => {
    const navLinks = [
        { label: 'Home', icon: { HomeIcon }, path: '/' },
        { label: 'Message', icon: { ChatBubbleIcon }, path: '/message' },
        { label: 'Discover', icon: { ExploreIcon }, path: '/discover' }
    ]

    // const showDropDown = () => {
    //     document.getElementsByClassName('dropdown-menu').style.display = 'block'
    // }

    const { auth, theme, notify } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useLocation()

    const isActive = (pn) => {
        if (pn === pathname) return 'active'
    }

    return (
        <div className="menu">
            <ul className="navbar-nav ">
                {/* {
                    navLinks.map((link, index) => (
                        <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                            <Link className="nav-link" to={link.path}>
                                <IconButton>
                                    <link.icon />
                                </IconButton>

                            </Link>
                        </li>
                    ))
                } */}

                <li className={`nav-item px-2 ${isActive('/')}`} >
                    <Link className="nav-link" to="/">
                        <Tooltip title="Home" arrow>

                            <IconButton>
                                <HomeIcon style={{ fontSize: '2rem' }} />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </li>


                <li className={`nav-item px-2 ${isActive('/message')}`} >
                    <Link className="nav-link" to="/message">
                        <Tooltip title="Message" arrow>
                            <IconButton>
                                <ChatBubbleIcon style={{ fontSize: '2rem' }} />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </li>



                <li className={`nav-item px-2 ${isActive('/discover')}`} >
                    <Link className="nav-link" to="/discover">
                        <Tooltip title="Discover People" arrow>

                            <IconButton>
                                <ExploreIcon style={{ fontSize: '2rem' }} />
                            </IconButton>

                        </Tooltip>
                    </Link>
                </li>



                <li className="nav-item dropdown" style={{ opacity: 1 }} >
                    <span className="nav-link position-relative" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Tooltip title={<h6>Notifications</h6>} arrow>
                            <IconButton>


                                <NotificationsIcon className="material-icons"
                                    style={{ color: notify.data.length > 0 ? 'crimson' : '', fontSize: '2rem' }}>
                                    favorite
                        </NotificationsIcon>
                            </IconButton>
                        </Tooltip>
                        <span className="notify_length">{notify.data.length}</span>

                    </span>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown"
                        style={{ transform: 'translateX(75px)' }}>
                        <NotifyModal />
                    </div>

                </li>


                {/* <li className="nav-item">

                    <Tooltip title="Your Profile" arrow>
                        <IconButton>
                            <Link to={`/profile/${auth.user._id}`}>

                                <Avatar src={auth.user.avatar} size="medium-avatar" />
                            </Link>
                        </IconButton>
                    </Tooltip>
                </li> */}




                <li className="nav-item dropdown" style={{ opacity: 1 }} >
                    <Tooltip title="Settings">
                        <SettingsIcon className="nav-link dropdown-toggle" id="navbarDropdown" style={{ fontSize: '3rem' }}
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        </SettingsIcon>
                    </Tooltip>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>

                        <label htmlFor="theme" className="dropdown-item"
                            onClick={() => dispatch({
                                type: GLOBALTYPES.THEME, payload: !theme
                            })}>

                            {theme ? 'Light mode' : 'Dark mode'}
                        </label>

                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/"
                            onClick={() => dispatch(logout())}>
                            Logout
                    </Link>
                    </div>
                </li>




            </ul>
        </div>

    )
}

export default Menu
