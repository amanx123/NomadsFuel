import Link from "next/link"


function NavBar() {
    return (
        <nav className="flex flex-row justify-between items-center p-3">
            <div className="inline-flex items-center">
                <Link href='/' className="text-xl font-bold text-orange-600 cursor-pointer" >
                    NomadsFuel
                </Link>
                <span className="ml-14 text-sm font-bold text-black flex gap-4">
                    <Link href='/shop' className="cursor-pointer">Shop</Link>
                    <Link href='/trips' className="cursor-pointer">Trips</Link>
                    <Link href='/connect' className="cursor-pointer">Connect</Link>
                    <Link href='/eats' className="cursor-pointer">Eats</Link>
                    <Link href='/experiences' className="cursor-pointer">Experiences</Link>
                    <Link href='/stays' className="cursor-pointer">Stays</Link>
                </span>
            </div>
            <div className="space-x-2 text-black font-semibold text-base">
                <Link className="cursor-pointer" href='/login'>
                    Login
                </Link>
                <Link className="cursor-pointer text-orange-700 p-2 transition" href='/sign-up'>
                    Sign up
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
