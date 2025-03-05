import { Link, useLocation } from "react-router";
import Button1 from "./Buttons/Button1";
import CurvyBackground from "./CurvyBackground";

const Header = () => {
    const location = useLocation();

    return (
        <div>
            {/* {location.pathname === '/' ?(<h1>Home pe hu</h1>):(<h1>Home pe nahi hu</h1>)}    */}
            <nav className="flex justify-around gap-10 mt-8 mr-24 ">
                <div className="h-44 w-1/4 ml-4 rounded-b-4xl font-libre-caslon -mt-8 font-caslon bg-[#C1FF5B] font-bold text-white text-8xl flex items-center justify-center">
                    Apex
                </div>
                <div className="w-1/2 h-16  flex justify-around items-center bg-gradient-to-r from-[#C1FF5B] to-[#73C4F4]  rounded-[50px]">
                    <div className="bg-white flex justify-around items-center w-full m-1 p-4 rounded-[50px]">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/who-should-join">Who Should Join</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/faq">FAQ</Link>
                    </div>

                </div>
                <div>
                    <Button1 name="Appply Now" />
                </div>
            </nav>
        </div>
    );

}

export default Header;