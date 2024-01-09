export default function MenuButton({toggleMenu, isMenuOpen}) {
    return (
        <button className="z-50 md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={!isMenuOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
                />
            </svg>
        </button>
    );
}
