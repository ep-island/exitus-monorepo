import { Link, Wallet } from "lucide-react"

export default function NavBar() {
    return (
        <header className="container mx-auto px-4 py-6 flex justify-end items-center">
            <button className="mx-4 px-4 py-2 border border-white text-white hover:bg-white hover:text-blue-900 rounded-md transition-colors duration-300 flex items-center">
                <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
            </button>
            <Link>
            <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-blue-900 rounded-md transition-colors duration-300 flex items-center">
                <Wallet className="mr-2 h-4 w-4" /> Profile
            </button>
            </Link>
        </header>
    )
}