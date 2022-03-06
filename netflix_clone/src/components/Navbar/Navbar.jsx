import {useState} from 'react';
import './navbar.scss';
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons';


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    console.log(isScrolled);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset > 0);
        return () => (window.onscroll = null);
    };

    return (
        <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
            <div className = 'container'>
                <div className='left'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix' />
                    <span> Homepage </span>
                    <span> Series </span>
                    <span> Movie </span>
                    <span> new and Popular </span>
                    <span> My List  </span>
                </div>
                <div className='right'>
                    <Search className = "icon" />
                    <span>KID</span>
                    <Notifications className = "icon" />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_icon_2.svg/1024px-User_icon_2.svg.png' alt='User' />
                    <div className='profile'>
                        <ArrowDropDown className = "icon" />
                        <div className = "options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;