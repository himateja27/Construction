import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import { servicesList } from '../data/services.js';
import TeamSection from '../sections/TeamSection.jsx';

const About = () => (
  <>
    <SEO title="About Us | Crown Home Spaces" description="Meet Crown Home Spaces, the Hyderabad-based leader in luxury interiors and construction excellence." />
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">About the firm</p>
            <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">A heritage of premium interiors and trusted construction delivery.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-crown-beige/90">
              Crown Home Spaces is grounded in Hyderabad with a team of designers, engineers, and project specialists who create curated architecture, refined interiors, and high-performance construction systems.
            </p>
          </div>
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Our mission</p>
            <p className="mt-4 text-base leading-8 text-crown-beige/90">
              To build aspirational environments for clients looking for contemporary luxury, dependable execution, and sustainable long-term value.
            </p>
            <div className="mt-8 grid gap-4 text-sm leading-7 text-crown-beige/90">
              <div className="rounded-3xl border border-white/10 bg-crown-rich/40 p-5">
                <p className="font-semibold text-white">Design-led quality</p>
                <p>We deliver interiors and façades with polished execution, layered materials, and architectural finesse.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-crown-rich/40 p-5">
                <p className="font-semibold text-white">Aligned delivery</p>
                <p>Project execution is supported by transparent communication, disciplined planning, and expert site supervision.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {servicesList.slice(0, 6).map((service) => (
            <motion.article key={service.title} whileHover={{ y: -6 }} className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:border-crown-gold/30 hover:bg-white/10">
              <p className="text-3xl">{service.icon}</p>
              <h2 className="mt-5 text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-crown-beige/90">{service.description}</p>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-glow">
            <h3 className="text-sm uppercase tracking-[0.35em] text-crown-gold">Engineering Excellence</h3>
            <p className="mt-4 text-lg text-crown-beige/90">Our core engineering strength is led by Azaruddin, the Lead Civil Engineer whose technical leadership underpins our quality, structural reliability, and premium project delivery.</p>
          </div>
        </div>

        <TeamSection />
      </div>
    </section>
  </>
);

export default About;
