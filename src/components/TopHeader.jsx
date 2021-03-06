import React, { useState } from 'react';
import { useAuth } from 'contexts/AuthContext';

function TopHeader({ toggleSidebar }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const { logout } = useAuth();

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-indigo-600 dark:bg-gray-900 dark:text-gray-300">
            <div className="flex items-center">
                <button
                    type="button"
                    onClick={() => toggleSidebar(true)}
                    className="text-gray-500 focus:outline-none lg:hidden">
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => document.body.classList.toggle('mini-sidebar')}
                    className="text-gray-500 focus:outline-none hidden lg:block">
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setDropdownOpen2(!dropdownOpen2)}
                        className="relative p-2 flex items-center text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect
                                xmlns="http://www.w3.org/2000/svg"
                                opacity="0.5"
                                x="17.0365"
                                y="15.1223"
                                width="8.15546"
                                height="2"
                                rx="1"
                                transform="rotate(45 17.0365 15.1223)"
                                fill="currentColor"
                            />
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    {dropdownOpen2 && (
                        <div className="fixed inset-0 w-full h-full z-40 backdrop-blur bg-black/10 dark:bg-black/20 duration-300 overflow-y-auto">
                            <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/2 mx-2 sm:mx-auto my-20 opacity-100 shadow-sm">
                                <div className="relative bg-white shadow-lg rounded-lg text-gray-900 dark:text-gray-100 dark:bg-gray-800 z-20">
                                    <div className="border-b border-gray-300 dark:border-gray-700">
                                        <div className="px-4 py-2 flex justify-around items-center">
                                            <svg
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                className="w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    opacity="0.5"
                                                    x="17.0365"
                                                    y="15.1223"
                                                    width="8.15546"
                                                    height="2"
                                                    rx="1"
                                                    transform="rotate(45 17.0365 15.1223)"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <input
                                                type="text"
                                                className="py-1.5 w-full flex items-center text-sm leading-6 text-gray-400 rounded-md pl-2 pr-3 border-0 outline-0 focus:ring-0 focus:outline-none focus:border-0 focus-within:outline-0 dark:bg-gray-800"
                                                placeholder="Quick search..."
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setDropdownOpen2(!dropdownOpen2)}
                                                className="border border-gray-300 dark:border-gray-700 rounded p-0.5 text-xs">
                                                ESC
                                            </button>
                                        </div>
                                    </div>
                                    <main className="px-4 py-2 max-h-96 overflow-hidden overflow-y-auto">
                                        <div className="h-44 flex items-center justify-center">
                                            <p>No recent searches</p>
                                        </div>
                                    </main>
                                    <footer className="flex justify-end border-t border-gray-300 dark:border-gray-700">
                                        <div className="px-4 py-2">
                                            <a
                                                href="https://www.algolia.com/docsearch"
                                                className="flex items-center"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <span className="text-xs mr-4">Search by</span>
                                                <svg
                                                    width="77"
                                                    height="19"
                                                    className="text-blue-500">
                                                    <path
                                                        d="M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button
                    type="button"
                    onClick={() => document.documentElement.classList.toggle('dark')}
                    className="flex items-center p-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <svg
                        aria-hidden="true"
                        data-toggle-icon="sun"
                        className="w-4 h-4 dark:flex hidden"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        aria-hidden="true"
                        data-toggle-icon="moon"
                        className="w-4 h-4 dark:hidden flex"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </button>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setDropdownOpen1(!dropdownOpen1)}
                        className="relative p-2 flex items-center text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {dropdownOpen1 && (
                        <div>
                            <div
                                role="button"
                                tabIndex="0"
                                onClick={() => setDropdownOpen1(false)}
                                className="fixed inset-0 h-full w-full z-10"
                            />

                            <div
                                className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20"
                                style={{ width: '20rem' }}>
                                <div className="py-2">
                                    <a
                                        href="/"
                                        className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                                        <img
                                            className="h-8 w-8 rounded-full object-cover mx-1"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                            alt="avatar"
                                        />
                                        <p className="text-gray-600 text-sm mx-2">
                                            <span className="font-bold" href="#">
                                                Sara Salah
                                            </span>{' '}
                                            replied on the{' '}
                                            <span className="font-bold text-blue-500" href="#">
                                                Upload Image
                                            </span>{' '}
                                            article . 2m
                                        </p>
                                    </a>
                                    <a
                                        href="/"
                                        className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                                        <img
                                            className="h-8 w-8 rounded-full object-cover mx-1"
                                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                            alt="avatar"
                                        />
                                        <p className="text-gray-600 text-sm mx-2">
                                            <span className="font-bold" href="#">
                                                Slick Net
                                            </span>{' '}
                                            start following you . 45m
                                        </p>
                                    </a>
                                    <a
                                        href="/"
                                        className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                                        <img
                                            className="h-8 w-8 rounded-full object-cover mx-1"
                                            src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                            alt="avatar"
                                        />
                                        <p className="text-gray-600 text-sm mx-2">
                                            <span className="font-bold" href="#">
                                                Jane Doe
                                            </span>{' '}
                                            Like Your reply on{' '}
                                            <span className="font-bold text-blue-500" href="#">
                                                Test with TDD
                                            </span>{' '}
                                            article . 1h
                                        </p>
                                    </a>
                                    <a
                                        href="/"
                                        className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2">
                                        <img
                                            className="h-8 w-8 rounded-full object-cover mx-1"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                                            alt="avatar"
                                        />
                                        <p className="text-gray-600 text-sm mx-2">
                                            <span className="font-bold" href="#">
                                                Abigail Bennett
                                            </span>{' '}
                                            start following you . 3h
                                        </p>
                                    </a>
                                </div>
                                <a
                                    href="/"
                                    className="block bg-gray-800 text-white text-center font-bold py-2">
                                    See all notifications
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="relative z-10 block w-8 h-8 mr-2 overflow-hidden rounded-full shadow focus:outline-none">
                        <img
                            className="object-cover w-full h-full"
                            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                            alt="Your avatar"
                        />
                    </button>

                    {dropdownOpen && (
                        <div>
                            <div
                                role="button"
                                tabIndex="0"
                                onClick={() => setDropdownOpen(false)}
                                className="fixed inset-0 z-10 w-full h-full"
                            />

                            <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                                <a
                                    href="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                                    Profile
                                </a>
                                <a
                                    href="/product"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                                    Products
                                </a>
                                <a
                                    href="/login"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        logout();
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                                    Log out
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default TopHeader;
