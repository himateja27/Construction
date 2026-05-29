import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden sm:min-h-[90vh] md:min-h-[100vh]">
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
    <div className="relative mx-auto flex min-h-screen w-full items-center justify-center px-4 py-12 text-white sm:min-h-[90vh] sm:px-6 md:min-h-[100vh] md:py-16 lg:px-14">
      <div className="w-full max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <span className="inline-block rounded-full border border-crown-gold/30 bg-crown-gold/10 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-crown-beige sm:px-4 sm:py-2">
            Hyderabad's premier construction brand
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="mt-6 text-3xl font-semibold leading-tight text-white sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
          Crown Home Spaces
          <span className="block text-2xl text-crown-gold sm:text-3xl md:text-4xl lg:text-5xl">Luxury interiors. Strategic construction. Signature architecture.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="mt-6 max-w-2xl text-sm leading-7 text-crown-beige sm:mt-8 sm:text-base md:text-lg md:leading-8">
          We craft cinematic residences, corporate landmarks, and premium interior ecosystems with timeless sophistication and disciplined execution.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-crown-gold px-6 py-3 text-xs font-semibold text-crown-dark transition hover:bg-white sm:px-8 sm:py-4 sm:text-sm">
            Start Your Project <FiArrowRight className="ml-2 sm:ml-3" size={16} />
          </a>
          <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-sm">
            Explore Projects
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
