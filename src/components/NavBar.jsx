import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IoHomeOutline, IoSunny } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { PiMoonStarsLight } from "react-icons/pi";
import { changeTheme } from '../redux/slice/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RxHamburgerMenu } from "react-icons/rx";



const NavBar = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    const [toggleThemeIcon, setToggleThemeIcon] = useState(false);
    const { theme } = useSelector((state) => state.theme);
    const [navToggle, setNavToggle] = useState(false);
    const [hamburgerToggle, setHamBurgerToggle] = useState(false);




    const toggleIcon = () => {
        setToggleThemeIcon(!toggleThemeIcon)
        dispatch(changeTheme());
    }

    const toggleNavBar = () => {
        setNavToggle(!navToggle)
    }
    return (
        <>
            {/* For larger devices  */}
            <nav className={`w-full hidden md:flex md:justify-around md:items-center z-30 sticky top-0 left-0 shadow-md py-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-100 text-black'}`}>

                <div className="flex mx-10 items-center">
                    <div className="flex gap-4">

                        <div className={`flex gap-1 justify-center items-center hover:border-b-2 transition-all ${location.pathname === '/' && 'border-b'}`}>
                            <IoHomeOutline />
                            <NavLink className={`text-sm font-semibold`} to={'/'}>Home</NavLink>
                        </div>

                        <div className={`flex gap-1 items-center hover:border-b-2 transition-all ${location.pathname === '/view-pets' && 'border-b'}`}>
                            <MdOutlinePets />
                            <NavLink className={'text-sm font-semibold'} to={'/view-pets'}>View pets</NavLink>
                        </div>

                    </div>

                    <div className="flex mx-10 items-center gap-4">
                        <div className={`flex gap-1 items-center hover:border-b-2 transition-all ${location.pathname === '/about' && 'border-b'}`}>
                            <LuUser />
                            <NavLink className={'text-sm font-semibold'} to={'/about'}>About</NavLink>
                        </div>

                        <button onClick={toggleIcon} className='active:bg-gray-500 ml-5 rounded-full transition-all px-2 mx-10 py-2'>
                            {
                                toggleThemeIcon ? <div className="flex transition-all active:animate-spin justify-center items-center"><IoSunny size={20} /></div> : <div className="flex transition-all active:animate-spin justify-center items-center"><PiMoonStarsLight size={20} /></div>
                            }
                        </button>
                    </div>
                </div>

            </nav>


            {/* For smaller devices  */}

            <nav className={`w-full flex justify-center h-20  md:hidden  z-30 sticky top-0 left-0 shadow-md py-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-100 text-black'}`}>



                <button className="absolute top-7 right-10" onClick={() => setHamBurgerToggle(toggleNavBar)}>
                    <RxHamburgerMenu size={30} className='active:scale-95 transition-all' />
                </button>


                {
                    navToggle &&

                    <div className={`flex flex-col justify-around h-52 w-full items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-100 text-black'}`}>

                        <div className="flex flex-col items-start gap-4 ">

                            <div onClick={() => setNavToggle(!navToggle)} className={`flex gap-1 items-center hover:border-b-2 transition-all ${location.pathname === '/' && 'border-b'}`}>
                                <IoHomeOutline />
                                <NavLink className={`text-sm mb-1 font-semibold`} to={'/'}>Home</NavLink>
                            </div>

                            <div className="flex flex-col  items-center justify-center gap-4">
                                <div onClick={() => setNavToggle(!navToggle)} className={`flex gap-1 items-center hover:border-b-2 transition-all ${location.pathname === '/about' && 'border-b'}`}>
                                    <LuUser />
                                    <NavLink className={'text-sm mb-1 font-semibold'} to={'/about'}>About</NavLink>
                                </div>
                            </div>




                            <div onClick={() => setNavToggle(!navToggle)} className={`flex gap-1 items-center hover:border-b-2 transition-all ${location.pathname === '/view-pets' && 'border-b'}`}>
                                <MdOutlinePets />
                                <NavLink className={'text-sm mb-1 font-semibold'} to={'/view-pets'}>View pets</NavLink>
                            </div>


                            <button onClick={toggleIcon} className='active:bg-gray-500 ml-5 rounded-full transition-all px-2 py-2'>
                                {
                                    toggleThemeIcon ? <div className="flex transition-all active:animate-spin justify-center items-center"><IoSunny size={20} /></div> : <div className="flex transition-all active:animate-spin justify-center items-center"><PiMoonStarsLight size={20} /></div>
                                }
                            </button>
                        </div>
                    </div>
                }

            </nav>
        </>
    )
}

export default NavBar