import { Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import Projects from '../pages/Projects.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import Careers from '../pages/Careers.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';

const AppRoutes = () => [
  <Route key="home" index element={<Home />} />,
  <Route key="about" path="about" element={<About />} />,
  <Route key="services" path="services" element={<Services />} />,
  <Route key="projects" path="projects" element={<Projects />} />,
  <Route key="testimonials" path="testimonials" element={<Testimonials />} />,
  <Route key="careers" path="careers" element={<Careers />} />,
  <Route key="contact" path="contact" element={<Contact />} />,
  <Route key="notfound" path="*" element={<NotFound />} />
];

export default AppRoutes;
