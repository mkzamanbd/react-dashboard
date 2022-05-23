import SideBarMenu from 'components/SideBarMenu';
import TopHeader from 'components/TopHeader';
import { useState } from 'react';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = (value) => {
        setIsOpen(value);
    };

    return (
        <div className="flex h-screen bg-gray-200 font-roboto">
            <SideBarMenu isOpen={isOpen} toggleSidebar={toggleSidebar} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopHeader toggleSidebar={toggleSidebar} />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        <slot />
                    </div>
                </main>
            </div>
        </div>
    );
}
