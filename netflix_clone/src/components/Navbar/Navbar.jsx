import { useContext, useState } from "react";
import './navbar.scss';
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    // console.log(isScrolled);
    const {dispatch} = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset > 0);
        return () => (window.onscroll = null);
    };

    const navigate = useNavigate();

    return (
        <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
            <div className = 'container'>
                <div className='left'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix' />
                    <Link to='/' className='link'>
                        <span> Homepage </span>
                    </Link>
                    <Link to = '/series' className='link'>
                        <span> Series </span>
                    </Link>
                    <Link to = '/movies' className='link'>
                        <span> Movie </span>
                    </Link>
                    <span> New and Popular </span>
                    <span> My List  </span>
                </div>
                <div className='right'>
                    <Search className = "icon" />
                    <span>KID</span>
                    <Notifications className = "icon" />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_icon_2.svg/1024px-User_icon_2.svg.png' alt='Users' />
                    <div className="profile">
                        <ArrowDropDown className = "icon" />
                        <div className = "options">
                            <span>Settings</span>
                            <span onClick ={() => {dispatch(logout()); navigate('/register')} }>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;