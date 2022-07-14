import React from 'react';

function Cards() {
    return (
        <div>
            <h3 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">Cards</h3>
            <div className="mt-4 mx-auto grid">
                <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                    Responsive cards
                </h4>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                Total clients
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                6389
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                Account balance
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                $ 46,760.89
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                New sales
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                376
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                Pending contacts
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                35
                            </p>
                        </div>
                    </div>
                </div>

                <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                    Cards with title
                </h4>
                <div className="grid gap-6 mb-8 md:grid-cols-2">
                    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <h4 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                            Revenue
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
                            commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
                            cum numquam, sed amet ratione! Ratione, nihil dolorum.
                        </p>
                    </div>
                    <div className="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs border border-gray-200 dark:border-gray-700">
                        <h4 className="mb-4 font-semibold">Colored card</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
                            commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
                            cum numquam, sed amet ratione! Ratione, nihil dolorum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4 mb-3">
                <h4 className="text-gray-700">Stacked</h4>

                <div className="max-w-sm mt-6 overflow-hidden bg-white rounded shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/id/1016/384/234"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="mb-2 text-xl font-bold text-gray-900">
                            The Coldest Sunset
                        </div>
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                            nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            #photography
                        </span>
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            #travel
                        </span>
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                            #winter
                        </span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="mt-5">
                <h4 className="text-gray-700">Horizontal</h4>
                <div className="w-full max-w-sm mt-6 lg:max-w-full lg:flex">
                    <div
                        className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                        style={{
                            backgroundImage: "url('https://picsum.photos/id/0/192/213')",
                        }}
                        title="Woman holding a mug"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-200 rounded-b lg:border-l-0 lg:border-t lg:border-gray-200 lg:rounded-b-none lg:rounded-r">
                        <div className="mb-8">
                            <p className="flex items-center text-sm text-gray-600">
                                <svg
                                    className="w-3 h-3 mr-2 text-gray-500 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="mb-2 text-xl font-bold text-gray-900">
                                Can coffee make you a better developer?
                            </div>
                            <p className="text-base text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 mr-4 rounded-full"
                                src="https://via.placeholder.com/50"
                                alt="Avatar of Jonathan Reinink"
                            />
                            <div className="text-sm">
                                <p className="leading-none text-gray-900">Jonathan Reinink</p>
                                <p className="text-gray-600">Aug 18</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
