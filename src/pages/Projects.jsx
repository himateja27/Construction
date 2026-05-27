import { projects } from '../data/projects.js';
import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';

const Projects = () => (
  <>
    <SEO title="Projects | Crown Home Spaces" description="Explore our luxury construction and interior design project portfolio across Hyderabad." />
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Project portfolio</p>
          <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Select projects that define our premium quality and architectural craft.</h1>
          <p className="mt-6 text-lg leading-8 text-crown-beige/90">
            A curated collection of residences, corporate builds, outdoor spaces, and smart homes executed with meticulous attention to detail.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article key={project.title} whileHover={{ y: -6 }} className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-glow transition hover:border-crown-gold/20 hover:bg-white/10">
              <div className="relative h-96 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-flex rounded-full bg-crown-gold/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-crown-gold">{project.category}</span>
                  <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-sm leading-7 text-crown-beige/90">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Projects;
