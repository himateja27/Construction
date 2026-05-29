import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Careers', path: '/careers' },
  { label: 'Founder', path: '/master-azhar' },
  { label: 'Contact', path: '/contact' }
];

const serviceLinks = [
  'Luxury Interiors',
  'Architectural Elevations',
  '3D Floor Plans',
  'Landscaping',
  'MEP Drawings',
  'Project Management'
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-crown-dark/95 px-6 py-16 text-crown-beige sm:px-10 lg:px-14">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-crown-rich text-lg font-bold text-crown-gold">CH</div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-crown-beige">Crown Home Spaces</p>
            <p className="mt-2 text-2xl font-semibold text-white">Premium Construction & Interiors</p>
          </div>
        </div>
        <p className="mt-6 max-w-md leading-7 text-crown-beige/90">
          Delivering cinematic design, strategic engineering, and corporate-grade project delivery across Hyderabad for residential and commercial clients.
        </p>
        <div className="mt-8 flex items-center gap-4 text-2xl text-crown-gold">
          <a href="https://instagram.com/crownhomespaces" target="_blank" rel="noreferrer" aria-label="Instagram"> <FaInstagram /> </a>
          <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" aria-label="WhatsApp"> <FaWhatsapp /> </a>
        </div>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-[0.35em] text-crown-beige">Navigation</h3>
        <ul className="mt-6 flex flex-col gap-3 text-sm">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="transition hover:text-white">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-[0.35em] text-crown-beige">Services</h3>
        <ul className="mt-6 flex flex-col gap-3 text-sm">
          {serviceLinks.map((service) => (
            <li key={service} className="transition hover:text-white">{service}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-[0.35em] text-crown-beige">Contact</h3>
        <div className="mt-6 flex flex-col gap-4 text-sm leading-7 text-crown-beige/90">
          <a href="https://wa.me/919553041347" className="inline-flex items-center gap-2 transition hover:text-white"><FaWhatsapp /> +91 95530 41347</a>
          <a href="https://wa.me/918712217250" className="inline-flex items-center gap-2 transition hover:text-white"><FaWhatsapp /> +91 87122 17250</a>
          <a href="mailto:crownhomespaces@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white"><FiMail /> crownhomespaces@gmail.com</a>
          <a href="https://maps.google.com/?q=Hyderabad,Telangana,India" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><FiMapPin /> Hyderabad, Telangana</a>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-sm text-crown-beige/70">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Crown Home Spaces. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="transition hover:text-white">Privacy Policy</a>
          <a href="#" className="transition hover:text-white">Terms & Conditions</a>
          <a href="/sitemap.xml" className="transition hover:text-white">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
