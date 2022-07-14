import React from 'react';

function Forms() {
    return (
        <div>
            <h3 className="text-3xl font-medium text-gray-700">Forms</h3>

            <div className="mt-4">
                <div className="mx-auto grid">
                    <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        Elements
                    </h4>
                    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Name</span>
                            <input
                                className="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                                placeholder="Jane Doe"
                            />
                        </label>

                        <div className="mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Account Type</span>
                            <div className="mt-2">
                                <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
                                    <input
                                        type="radio"
                                        className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                        name="accountType"
                                        value="personal"
                                    />
                                    <span className="ml-2">Personal</span>
                                </label>
                                <label className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                                    <input
                                        type="radio"
                                        className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                        name="accountType"
                                        value="business"
                                    />
                                    <span className="ml-2">Business</span>
                                </label>
                            </div>
                        </div>

                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">
                                Requested Limit
                            </span>
                            <select className="block w-full mt-1 text-sm border rounded appearance-none dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                                <option>$1,000</option>
                                <option>$5,000</option>
                                <option>$10,000</option>
                                <option>$25,000</option>
                            </select>
                        </label>

                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Multiselect</span>
                            <select
                                className="block w-full mt-1 text-sm border rounded appearance-none dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-multiselect focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                multiple>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                            </select>
                        </label>

                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Message</span>
                            <textarea
                                className="block w-full mt-1 text-sm border rounded dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                rows="3"
                                placeholder="Enter some long form content."
                            />
                        </label>

                        <div className="flex mt-6 text-sm">
                            <label className="flex items-center dark:text-gray-400">
                                <input
                                    type="checkbox"
                                    className="text-purple-600 form-checkbox rounded focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                />
                                <span className="ml-2">
                                    I agree to the
                                    <span className="underline">privacy policy</span>
                                </span>
                            </label>
                        </div>
                    </div>

                    <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        Validation
                    </h4>
                    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Invalid input</span>
                            <input
                                className="block w-full mt-1 text-sm border rounded appearance-none p-2 border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red form-input"
                                placeholder="Jane Doe"
                            />
                            <span className="text-xs text-red-600 dark:text-red-400">
                                Your password is too short.
                            </span>
                        </label>

                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Valid input</span>
                            <input
                                className="block w-full mt-1 text-sm border rounded appearance-none p-2 border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input"
                                placeholder="Jane Doe"
                            />
                            <span className="text-xs text-green-600 dark:text-green-400">
                                Your password is strong.
                            </span>
                        </label>

                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Helper text</span>
                            <input
                                className="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                                placeholder="Jane Doe"
                            />
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                                Your password must be at least 6 characters long.
                            </span>
                        </label>
                    </div>

                    <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        Icons
                    </h4>
                    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Icon left</span>

                            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                                <input
                                    className="block w-full pl-10 mt-1 text-sm border rounded appearance-none p-2 text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                                    placeholder="Jane Doe"
                                />
                                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </label>

                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Icon right</span>

                            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                                <input
                                    className="block w-full pr-10 mt-1 text-sm border rounded appearance-none p-2 text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                                    placeholder="Jane Doe"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </label>
                    </div>

                    <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        Buttons
                    </h4>
                    <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <label className="block text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Button left</span>
                            <div className="relative">
                                <input
                                    className="block w-full pl-20 mt-1 text-sm border rounded appearance-none p-2 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                                    placeholder="Jane Doe"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                                    Click
                                </button>
                            </div>
                        </label>

                        <label className="block mt-4 text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Button right</span>
                            <div className="relative text-gray-500 focus-within:text-purple-600">
                                <input
                                    className="block w-full pr-20 mt-1 text-sm border rounded appearance-none p-2 text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                                    placeholder="Jane Doe"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                    Click
                                </button>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forms;
