import React, {ReactNode} from 'react';
import Sidebar from "@/components/shared/sidebar";

const RootLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className="root">
            <Sidebar />
            {/*<MobileNav/>*/}
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default RootLayout;