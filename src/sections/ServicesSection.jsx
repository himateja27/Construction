import { motion } from 'framer-motion';
import { servicesList } from '../data/services.js';

const ServicesSection = () => (
  <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Our expertise</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Premium construction & interior services for elite spaces.</h2>
        <p className="mt-5 text-base leading-8 text-crown-beige/90 sm:text-lg">
          From luxury interiors to architectural elevations, our portfolio demonstrates technical mastery and elegant execution.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {servicesList.map((service) => (
          <motion.article key={service.title} whileHover={{ y: -8 }} className="group rounded-[32px] border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-crown-gold/30 hover:bg-white/10">
            <div className="text-4xl text-crown-gold">{service.icon}</div>
            <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-crown-beige/90">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
