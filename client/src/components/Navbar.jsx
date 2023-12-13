import { LuLogIn } from "react-icons/lu";
import { RiUserShared2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <nav
                className=" bg-black w-full max-w-screen-xl px-6 py-3 mt-2 mx-auto text-white bg-border shadow-md rounded-xl border-white/80 backdrop-blur-2xl backdrop-saturate-200">
                <div className="flex items-center justify-between text-white">
                    <a href="#"
                        className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                        Library of Programmer
                    </a>
                    <div className="hidden lg:block">
                        <ul className="flex flex-row gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="block p-1 items-end font-sans text-sm antialiased font-medium leading-normal text-white">
                                <a href="#" className="flex items-center transition-colors hover:text-blue-500">
                                <RiUserShared2Fill className="mr-1" />
                                    Sign Up
                                </a>
                            </li>
                            <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-white">
                                <Link to='/login' className="flex items-center transition-colors hover:text-blue-500">
                                    <LuLogIn className="mr-1" />
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                aria-hidden="true" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}