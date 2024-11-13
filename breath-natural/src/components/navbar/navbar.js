import './navbar.scss';
import logo from '../../assets/Logo.png';
import { BsBag, BsSearch,BsMenuButtonWide } from "react-icons/bs";

function Navbar() {
  return (
    <div className="Navbar">
      <header>
        <img src={logo} alt="logo" className="logo" >
        </img>
        <div className="pageGroup">
        <li id="page1">Home</li>
        <li id="page2">More</li>
        <li id="page3">Contact</li>
        </div>
        <div className="iconGroup">
          <BsSearch/>
          <BsBag />
          <BsMenuButtonWide />
        </div>
       
      </header>
    </div>
  );
}

export default Navbar;
