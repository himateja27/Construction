import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import { servicesList } from '../data/services.js';

const Services = () => (
  <>
    <SEO title="Services | Crown Home Spaces" description="Explore luxury construction, interior design, architectural elevations, project management, and more." />
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Service experience</p>
          <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">End-to-end services crafted for premium living and commercial excellence.</h1>
          <p className="mt-6 text-lg leading-8 text-crown-beige/90">
            Our service offering blends architectural vision, engineering reliability, interior luxury, and digital smart living systems for meaningful spaces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesList.map((service) => (
            <motion.article key={service.title} whileHover={{ y: -6 }} className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:border-crown-gold/30 hover:bg-white/10">
              <p className="text-3xl">{service.icon}</p>
              <h2 className="mt-6 text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-crown-beige/90">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
