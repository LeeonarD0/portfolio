export function Header() {
    return (
        <div className="flex justify-between items-center content-center gap-7">
            {/*--------------- logo ------------------ */}
            <div className="italic text-white text-3xl pt-8">
                <span className="text-gradientGreenEnd">
                    LEODEV
                </span>
            </div>
            {/*--------------- menu ------------------ */}
            <nav className="flex gap-10 text-white text-2xl pt-20">
                <a className="hover:text-green duration-300" href="">About</a>
                <a className="hover:text-green duration-300" href="">Services</a>
                <a className="hover:text-green duration-300" href="">Projects</a>
                <a className="hover:text-green transition duration-300" href="">Contact</a>
            </nav>

        </div>
    )
}