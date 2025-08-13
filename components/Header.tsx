'use clinet'

import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full h-20 bg-gray-800 flex items-center justify-around">
            <Link href="/">
                <div className="w-40 h-10 bg-yellow-400 text-gray-800 flex justify-center items-center font-bold italic rounded hover:bg-yellow-300 cursor-pointer">
                    Multi Shop
                </div>
            </Link>
            <Link href="/about" className="text-white hover:underline">
                About
            </Link>
             <Link href="/contact" className="text-white hover:underline">
                Contact
            </Link>
        </div>
    )
}

export default Header;