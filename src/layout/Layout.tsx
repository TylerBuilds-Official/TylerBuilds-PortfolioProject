import type { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from '../components/global/PageTransition';

function Layout({ children }: PropsWithChildren) {
    return (
        <div className="app-root">
            <Navbar />
            <main>
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
