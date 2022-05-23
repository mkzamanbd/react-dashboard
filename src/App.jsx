import SideBarMenu from 'components/SideBarMenu';
import TopHeader from 'components/TopHeader';

export default function App() {
    return (
        <div className="flex h-screen bg-gray-200 font-roboto">
            <SideBarMenu />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopHeader />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        <slot />
                    </div>
                </main>
            </div>
        </div>
    );
}
