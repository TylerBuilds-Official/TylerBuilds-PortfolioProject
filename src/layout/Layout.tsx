import type { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }: PropsWithChildren) {
    return (
        <div className="app-root">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
