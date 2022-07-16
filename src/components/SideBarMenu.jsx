import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideBarMenu({ isOpen, toggleSidebar }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <aside className="flex">
            <div
                onClick={() => toggleSidebar(false)}
                role="button"
                tabIndex="0"
                className={`${
                    isOpen ? 'block' : 'hidden'
                } fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}
            />

            <div
                className={`${
                    isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
                } sidebar fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-800 dark:bg-gray-800 lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-center justify-center my-6">
                    <Link to="/dashboard" className="flex items-center">
                        <svg
                            className="w-12 h-12"
                            viewBox="0 0 512 512"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                                fill="#4C51BF"
                                stroke="#4C51BF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                                fill="white"
                            />
                        </svg>

                        <span className="mx-2 text-2xl font-semibold text-white app-name">
                            Dashboard
                        </span>
                    </Link>
                </div>

                <nav>
                    <ul id="nav-menu" className="nav-menu">
                        <li>
                            <Link
                                to="/dashboard"
                                className={`${
                                    isActive('/dashboard') && 'nav-link-active'
                                } nav-link`}>
                                <span className="material-icons">dashboard</span>
                                <span className="mx-4 link-label truncate">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ui-elements"
                                className={`${
                                    isActive('/ui-elements') && 'nav-link-active'
                                } nav-link`}>
                                <span className="material-icons">grid_view</span>
                                <span className="mx-4 link-label truncate">UI Elements</span>
                                <span className="material-icons ml-auto transition-transform transform rotate-180">
                                    expand_more
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tables"
                                className={`${isActive('/tables') && 'nav-link-active'} nav-link`}>
                                <span className="material-icons">table_view</span>
                                <span className="mx-4 link-label truncate">Tables</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/forms"
                                className={`${isActive('/forms') && 'nav-link-active'} nav-link`}>
                                <span className="material-icons">check_box</span>
                                <span className="mx-4 link-label truncate">Forms</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cards"
                                className={`${isActive('/cards') && 'nav-link-active'} nav-link`}>
                                <span className="material-icons">payment</span>
                                <span className="mx-4 link-label truncate">Cards</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/modal"
                                className={`${isActive('/model') && 'nav-link-active'} nav-link`}>
                                <span className="material-icons">wysiwyg</span>
                                <span className="mx-4 link-label truncate">Modal</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blank"
                                className={`${isActive('/blank') && 'nav-link-active'} nav-link`}>
                                <span className="material-icons">description</span>
                                <span className="mx-4 link-label truncate">Blank</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideBarMenu;
