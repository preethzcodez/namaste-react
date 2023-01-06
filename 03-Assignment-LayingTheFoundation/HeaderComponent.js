import logo from "./assets/logo.png";
import user from "./assets/user.png";

const HeaderComponent = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <input className="search-box" type="text" placeholder="Search"/>
            <img src={user} className="user" alt="user"/>
        </div>
    )
}

export default HeaderComponent;