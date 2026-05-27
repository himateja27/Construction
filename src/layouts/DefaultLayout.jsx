import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const DefaultLayout = () => (
  <div className="relative overflow-hidden bg-crown-dark text-white">
    <Header />
    <main className="relative z-10">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default DefaultLayout;
