import React from "react";
import "./NavBar.css"
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";


const NavBar = () => {
  
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="NavBar-container">
      <nav className="NavBar-wrapper">
        
        <ul className="NavBar-links">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Pillar">Pillar </a></li>
          <li><a href="#Application">Application</a></li>
          <li><a href="#Schedule">Schedule</a></li>
          <li><a href="#FAQ">FAQ</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>


      <div className="club__navbar-smallscreen">
                <IoMenu color ="000" fontSize={50} cursor={'pointer'} onClick={() => setToggleMenu(true)}></IoMenu>

                {toggleMenu &&(
                    <div className="club__navbar-smallscreen_overlay flex__center slide-bot">
                        <BiMenuAltRight color ="000" fontSize={50} className="overlay__close" onClick={() => setToggleMenu(false)}></BiMenuAltRight>
                        <ul className='club__navbar-smallscreen_links'>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Pillar">Pillar </a></li>
                        <li><a href="#Application">Application</a></li>
                        <li><a href="#Schedule">Schedule</a></li>
                        <li><a href="#FAW">FAQ</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                )}

            </div>




    </div>
  );
};

export default NavBar;