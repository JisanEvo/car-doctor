
import { Link } from 'react-router-dom';
// import{logo} from '../../../../assets/assets/logo.svg'
const NavBar = () => {
    const navLinks=<>
<li><Link to="/">Home </Link></li>
<li><Link to="/about">About </Link></li>
<li><Link to="/login">Login</Link></li>


{/* <li><a>About </a></li>
<li><a>Service</a></li>
<li><a>Blog</a></li>
<li><a>Contact</a></li> */}

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                 {
                    navLinks
                 }
                    </ul>
                </div>
                <Link  className="w-[50px]">
             <img src="https://i.postimg.cc/c4TNgybq/car-web-icon-simple-illustration-1007853-136.avif" alt="" />
                 </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                 {
                    navLinks
                 }
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Appoinment</button>

            </div>
        </div>
    );
};

export default NavBar;