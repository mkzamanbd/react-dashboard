import React, { useState } from 'react';
import SideBarMenu from 'components/SideBarMenu';
import TopHeader from 'components/TopHeader';

function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = (value) => {
        setIsOpen(value);
    };

    return (
        <div className="flex h-screen bg-gray-200 font-roboto dark:bg-gray-900 dark:text-gray-300">
            <SideBarMenu isOpen={isOpen} toggleSidebar={toggleSidebar} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopHeader toggleSidebar={toggleSidebar} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
                    <div className="mx-auto px-6 py-8">{children}</div>
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
