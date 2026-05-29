import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { servicesMenu } from '../data/services.js';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Careers', path: '/careers' },
  { label: 'Founder', path: '/master-azhar' },
  { label: 'Contact', path: '/contact' }
];

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${sticky ? 'bg-crown-dark/95 backdrop-blur-xl shadow-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-crown-gold bg-crown-rich text-lg font-semibold text-crown-gold shadow-glow">
            CH
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-crown-beige">Crown Home Spaces</p>
            <p className="text-sm text-crown-gold">Luxury Interiors & Construction</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.22em] transition-colors duration-300 ${isActive ? 'text-crown-gold' : 'text-crown-beige hover:text-white'}`
              }
              onMouseEnter={() => item.label === 'Services' && setShowMega(true)}
              onMouseLeave={() => item.label === 'Services' && setShowMega(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-crown-gold bg-crown-gold/10 px-5 py-3 text-sm text-crown-beige transition hover:border-white hover:text-white">
            <FaWhatsapp /> WhatsApp
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-crown-gold px-5 py-3 text-sm font-semibold text-crown-dark transition hover:bg-white">
            Get Quote
          </Link>
        </div>

        <button onClick={() => setOpen((prev) => !prev)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-crown-gold text-crown-gold lg:hidden">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {showMega && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-0 top-full z-40 hidden w-full max-w-5xl translate-y-3 rounded-b-3xl bg-crown-dark/95 px-8 py-8 shadow-2xl backdrop-blur-xl lg:block">
          <div className="grid grid-cols-2 gap-6 text-sm text-crown-beige">
            {servicesMenu.slice(0, 8).map((service) => (
              <a key={service.title} href="/services" className="rounded-3xl border border-white/5 bg-white/5 px-5 py-4 transition hover:border-crown-gold hover:bg-white/10 hover:text-white">
                <p className="font-semibold text-white">{service.title}</p>
                <p className="mt-2 leading-relaxed text-sm text-crown-beige">{service.description}</p>
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {open && (
        <div className="absolute inset-x-0 top-full z-40 bg-crown-dark/95 px-6 pb-6 pt-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.path} onClick={() => setOpen(false)} className="text-lg uppercase tracking-[0.2em] text-crown-beige hover:text-white">
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-crown-beige">
            <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <FaWhatsapp /> +91 95530 41347
            </a>
            <a href="mailto:crownhomespaces@gmail.com" className="inline-flex items-center gap-2">
              <FiMail /> Email Us
            </a>
            <a href="https://maps.google.com/?q=Hyderabad,Telangana,India" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <FiMapPin /> Hyderabad
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
