import { type PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

function PageTransition({ children }: PropsWithChildren) {
    const location = useLocation();

    return (
        <div key={location.pathname} className="page-transition">
            {children}
        </div>
    );
}

export default PageTransition;
