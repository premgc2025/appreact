import {Link} from "react-router-dom";
function Header(){

    return(
        <div className="header">
            <div className="header-main">
            <div className="nav-bar">
                <div className="logo">
                {/* <li class="li"> <Link to="/" class="link logo">Logo Here</Link></li> */}
                    <h3>Logo Here</h3>
                </div>
                <ul class="nav-bar-list">
                    
                    <li> About us </li>
                    <li>Services</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                    <li>  Login </li>
                    
                </ul>
                
            </div>
            <ul className="nav-main-bar">
                <li> <Link to="/treking">Treking</Link> </li>
                    
                    {/* <li> <Link class="link" to="/treking"><img class="nav-icon" src="/src/components/image/Trekking.png" alt="Trekking Image" /> Treking</Link></li> */}
                    {/* <li> <Link class="link" to="/tours"><img class="nav-icon-tour" src="/src/components/image/Tour.png" alt="Tour Image" /> Tours</Link></li> */}
                    <li> Booking</li>

            </ul>


            </div>

        </div>
    )
}
export default Header;