import React from 'react';

function UIElements() {
    return (
        <div>
            <h3 className="text-3xl font-medium text-gray-700 dark:text-gray-300">UI Elements</h3>

            <div className="mt-4">
                <h4 className="text-gray-600">Alerts</h4>

                <div className="mt-4">
                    <div className="px-4 py-4 overflow-x-auto bg-white rounded-md whitespace-nowrap">
                        <div className="inline-flex w-full max-w-sm ml-3 overflow-hidden bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-center w-12 bg-green-500">
                                <svg
                                    className="w-6 h-6 text-white fill-current"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                                </svg>
                            </div>

                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-green-500">Success</span>
                                    <p className="text-sm text-gray-600">
                                        Your account was registered!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex w-full max-w-sm ml-3 overflow-hidden bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-center w-12 bg-blue-500">
                                <svg
                                    className="w-6 h-6 text-white fill-current"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                                </svg>
                            </div>

                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-blue-500">Info</span>
                                    <p className="text-sm text-gray-600">
                                        Channel archived by the owner.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex w-full max-w-sm ml-3 overflow-hidden bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-center w-12 bg-yellow-500">
                                <svg
                                    className="w-6 h-6 text-white fill-current"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                                </svg>
                            </div>

                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-yellow-500">Warning</span>
                                    <p className="text-sm text-gray-600">
                                        Image size is too large.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex w-full max-w-sm ml-3 overflow-hidden bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-center w-12 bg-red-500">
                                <svg
                                    className="w-6 h-6 text-white fill-current"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                                </svg>
                            </div>

                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-red-500">Error</span>
                                    <p className="text-sm text-gray-600">
                                        Your email is already used!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h4 className="text-gray-600">Inputs</h4>

                <div className="mt-4">
                    <div className="flex items-center px-4 py-4 space-x-4 overflow-x-auto bg-white rounded-md">
                        <label>
                            <input
                                type="radio"
                                className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                                name="radio"
                            />
                            <span className="ml-2 text-gray-700">Radio</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                className="w-5 h-5 text-indigo-600 rounded-md focus:ring-indigo-500"
                                name="radio"
                            />
                            <span className="ml-2 text-gray-700">Checkbox</span>
                        </label>

                        <label className="block">
                            <input
                                type="email"
                                placeholder="Email"
                                className="block w-full mt-1 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                            />
                        </label>

                        <div className="relative mx-4 lg:mx-0">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>

                            <input
                                className="w-32 pl-10 pr-4 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h4 className="text-gray-600">Buttons</h4>

                <div className="mt-4">
                    <div className="flex px-4 py-4 space-x-4 overflow-x-auto bg-white rounded-md">
                        <button
                            type="button"
                            className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            Primary
                        </button>

                        <button
                            type="button"
                            className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            <svg
                                className="w-5 h-5 mx-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="mx-1">Refresh</span>
                        </button>

                        <div className="flex items-center">
                            <button
                                type="button"
                                className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                                Download
                            </button>

                            <span className="border border-transparent" />

                            <div className="relative">
                                <button
                                    type="button"
                                    className="relative z-10 block p-2 transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                        />
                                    </svg>
                                </button>

                                <div className="absolute right-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h4 className="text-gray-600">Pagination</h4>

                <div className="mt-4">
                    <div className="flex px-4 py-4 overflow-x-auto bg-white rounded-md">
                        <div className="flex mr-4 rounded">
                            <a
                                href="/previous"
                                className="px-3 py-2 ml-0 leading-tight text-indigo-700 bg-white border border-r-0 border-gray-200 rounded-l hover:bg-indigo-500 hover:text-white">
                                <span>Previous</span>
                            </a>
                            <a
                                href="/next"
                                className="px-3 py-2 leading-tight text-indigo-700 bg-white border border-r-0 border-gray-200 hover:bg-indigo-500 hover:text-white">
                                <span>1</span>
                            </a>
                            <a
                                href="/next"
                                className="px-3 py-2 leading-tight text-indigo-700 bg-white border border-r-0 border-gray-200 hover:bg-indigo-500 hover:text-white">
                                <span>2</span>
                            </a>
                            <a
                                href="/next"
                                className="px-3 py-2 leading-tight text-indigo-700 bg-white border border-r-0 border-gray-200 hover:bg-indigo-500 hover:text-white">
                                <span>3</span>
                            </a>
                            <a
                                href="/next"
                                className="px-3 py-2 leading-tight text-indigo-700 bg-white border border-gray-200 rounded-r hover:bg-indigo-500 hover:text-white">
                                <span>Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UIElements;
