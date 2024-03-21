// modules
import { NavLink } from "react-router-dom"

// assets
import logo from "../assets/logo.png"

export default function NavBar() {
    return(
        <nav className="w-full nav_gradient flex p-4 shadow-2xl justify-between">
            <div className="invisible w-0 md:w-64 md:visible">
                <img src={logo} alt="logo" className="w-full"/>
            </div>
            <div className="flex justify-center w-full w-fit items-center gap-5 md:w-fit">
                <NavLink to={'/'} className="text-sm font-semibold underline-animation sm:text-lg md:text-xl">Accueil</NavLink>
                <NavLink to={'/produits'} className="text-sm font-semibold underline-animation sm:text-lg md:text-xl">Nos produits</NavLink>
                <NavLink to={'/contact'} className="text-sm font-semibold underline-animation sm:text-lg md:text-xl">Contact</NavLink>
            </div>
        </nav>
    )
}