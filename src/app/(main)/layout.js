import { ToastContainer } from 'react-toastify';

import Footer from './components/FooterComponet/Footer';
import Navbar from './components/navbar/Navbar';

export const metadata = {
    title: "Red de Cuidados",
    description: "La Red Nacional de Cuidados, reúne a diversas organizaciones públicas y privadas de la sociedad civil a lo largo de todo Chile.",
}

export default function layout({ children }) {
    return (
        <body>
            <header>
                <Navbar/>
            </header>

            <>{children}</>

            <Footer />
            <ToastContainer />
        </body>
    );
}
