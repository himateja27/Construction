import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedProjects = () => (
  <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Project showcase</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Crafted spaces with architectural presence.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-crown-beige/90 sm:text-base">
          An immersive gallery of corporate, residential, and landscape projects engineered for luxury, comfort, and enduring quality.
        </p>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 } }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <motion.article whileHover={{ scale: 1.01 }} className="group overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#161113] via-[#1f1710] to-[#221a14] shadow-glow">
              <div className="relative h-96 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-flex rounded-full bg-crown-gold/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-crown-gold">{project.category}</span>
                  <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="space-y-3 p-8">
                <p className="text-sm leading-7 text-crown-beige/90">{project.description}</p>
                <a href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-crown-gold transition hover:text-white">
                  View case study
                </a>
              </div>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default FeaturedProjects;
