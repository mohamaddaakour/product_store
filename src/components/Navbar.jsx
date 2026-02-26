// icons
import { FaCartShopping } from "react-icons/fa6";
import { MdCreate } from "react-icons/md";

import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-8 bg-cyan-500">
        
            <Link to="/">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">Product Store</h1>
                    <FaCartShopping className="text-2xl" />
                </div>
            </Link>

        <Link to="/create">
            <button aria-label="create product" className="flex items-center justify-center p-3 rounded-xl border border-black text-xl transition hover:bg-black hover:text-white
                focus:ring-2 focus:ring-black cursor-pointer">
                <MdCreate />
            </button>
        </Link>
    </nav>
  )
}

export default Navbar;