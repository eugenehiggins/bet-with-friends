import logo from '../assets/logo_frame.png'

const Header = (props) => {

    return (
        <div className="header">
            <img src={logo} alt="bet with friends logo" height="150"/>
        </div>
    )
}

export default Header;