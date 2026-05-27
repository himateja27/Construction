import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => (
  <section className="relative min-h-[90vh] overflow-hidden">
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      src="https://assets.mixkit.co/videos/preview/mixkit-luxury-modern-office-building-36896-large.mp4"
      poster="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-crown-dark/85" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,156,109,0.16),_transparent_35%),linear-gradient(180deg,rgba(26,21,16,0.56),rgba(10,8,6,0.98))]" />
    <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24 text-white sm:px-10 lg:px-14">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <span className="inline-block rounded-full border border-crown-gold/30 bg-crown-gold/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-crown-beige">
          Hyderabad’s premier construction brand
        </span>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="mt-8 max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
        Crown Home Spaces
        <span className="block text-crown-gold">Luxury interiors. Strategic construction. Signature architecture.</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="mt-8 max-w-2xl text-lg leading-8 text-crown-beige sm:text-xl">
        We craft cinematic residences, corporate landmarks, and premium interior ecosystems with timeless sophistication and disciplined execution.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-crown-gold px-8 py-4 text-sm font-semibold text-crown-dark transition hover:bg-white sm:px-10">
          Start Your Project <FiArrowRight className="ml-3" />
        </a>
        <a href="/projects" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-10">
          Explore Projects
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
