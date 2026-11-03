import { NavLink } from "react-router"



const Footer = () => {
  return (
    <div className="bg-amber-200 dark:bg-gray-800">
        <div  className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <NavLink to={'/'} className="text-2xl font-semibold text-amber-800 dark:text-amber-300">
            MiniMarket
            </NavLink>
            <div>
                &copy; 2026 MiniMarket. Todos los derechos reservados
            </div>
        </div>
    </div>
  )
}

export default Footer
