import React from 'react';

function PageNotFound() {
    return (
        <div className="flex items-center justify-center overflow-hidden h-screen">
            <div className="p-40 text-center">
                <main className="mb-4">
                    <div className="mb-6">
                        <h1 className="font-semibold text-indigo-700 text-5xl mb-6">Error 404</h1>
                        <h2 className="font-semibold text-indigo-300 text-3xl">
                            The page you requested was not found.
                        </h2>
                    </div>
                    <a className="inline-block btn-skeuomorphic py-16 px-40" href="/dashboard">
                        Go back to homepage
                    </a>
                </main>
            </div>
        </div>
    );
}

export default PageNotFound;
