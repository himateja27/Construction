import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import founder from '../assets/images/founder/index.js';

const imageFiles = import.meta.glob('../assets/images/live-projects/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url' });
const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" x2="1" y1="0" y2="1"%3E%3Cstop offset="0%25" stop-color="%23a9865b"/%3E%3Cstop offset="100%25" stop-color="%230f0702"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23g)"/%3E%3Ctext x="50%25" y="48%25" text-anchor="middle" fill="%23fff" font-family="Inter, sans-serif" font-size="48" font-weight="700"%3ELive Project%3C/text%3E%3C/svg%3E';

const projects = [
  {
    slug: 'rr-majil',
    name: 'RR Majil',
    category: 'Architectural Elevation',
    description: 'A cinematic elevation project with sculpted façade geometry, gold detailing, and premium material layering.',
    status: 'Premium Showcase',
    imageName: 'rr-majil.jpg'
  },
  {
    slug: 'project-21dr',
    name: 'Project 21 DR',
    category: 'Turnkey Project',
    description: 'A full turnkey interior delivery blending luxury finishes, ambient lighting, and seamless spatial flow.',
    status: 'Turnkey Excellence',
    imageName: 'project-21dr.jpg'
  },
  {
    slug: 'phoenix-elysium',
    name: 'Phoenix Elysium',
    category: 'Architectural Elevation',
    description: 'Dynamic architectural silhouette, refined glazing, and prestige-driven exterior detailing.',
    status: 'Luxury Elevation',
    imageName: 'phoenix-elysium.jpg'
  },
  {
    slug: 'villa-7',
    name: 'Villa 7',
    category: 'Architectural Elevation',
    description: 'A villa facade concept with elegant proportions, layered textures, and premium landscape framing.',
    status: 'Signature Villa',
    imageName: 'villa-7.jpg'
  },
  {
    slug: 'qudri-bungalow',
    name: 'Qudri Bungalow',
    category: 'Residential Construction',
    description: 'A luxury residential construction project with curated interiors, robust delivery, and fine craftsmanship.',
    status: 'Residential Masterpiece',
    imageName: 'qudri-bungalow.jpg'
  },
  {
    slug: 'h18',
    name: '#18',
    category: 'Premium Residential Project',
    description: 'High-end residential execution featuring warm gold accents, glass volumes, and cinematic comfort.',
    status: 'Premium Residence',
    imageName: 'h18.jpg'
  }
];

const comingSoonProjects = [
  {
    title: 'Coming Soon Project',
    category: 'Upcoming Luxury Villa',
    description: 'A forthcoming turnkey residence with premium architectural finishes, cinematic interiors, and meticulous craftsmanship.',
    badge: 'Coming Soon',
    previewImageName: 'phoenix-elysium.jpg'
  },
  {
    title: 'Upcoming Turnkey Project',
    category: 'Future Residential Build',
    description: 'An elegant placeholder card celebrating the next elite project launch from Crown Home Spaces.',
    badge: 'Coming Soon',
    previewImageName: 'villa-7.jpg'
  }
];

const LiveProjects = () => {
  const imageMap = useMemo(() => {
    return Object.entries(imageFiles).reduce((map, [path, value]) => {
      const fileName = path.split('/').pop();
      const url = typeof value === 'string' ? value : value?.default || value?.url || fallbackImage;
      if (fileName) map[fileName.toLowerCase()] = url;
      return map;
    }, {});
  }, []);

  const bannerImage = imageMap['phoenix-elysium.jpg'] || imageMap['rr-majil.jpg'] || imageMap['villa-7.jpg'] || fallbackImage;
  const [active, setActive] = useState(null);
  const selected = active !== null ? projects[active] : null;

  return (
    <>
      <SEO
        title="Luxury Interior & Turnkey Projects in Kondapur | Crown Home Spaces"
        description="Explore premium luxury interior and turnkey construction projects by Crown Home Spaces at 2ND FLOOR, BTR TOWER, My Home Mangala Rd, Prem Nagar, Kondapur."
        url="https://crownhomespaces.com/live-projects"
        image={bannerImage}
        keywords="Luxury Interiors Hyderabad, Turnkey Projects Hyderabad, Live Projects, Crown Home Spaces, Architectural Elevation Hyderabad"
      />

      <section className="relative h-[70vh] min-h-[520px] overflow-hidden sm:h-[75vh] lg:h-[80vh]">
        <img src={bannerImage} alt="Premium architectural hero banner" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.14),_transparent_40%)]" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-16 sm:px-10 lg:px-14">
          <div className="max-w-3xl rounded-[32px] border border-white/10 bg-black/40 p-8 shadow-glow backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Live Projects Showcase</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">Cinematic luxury architecture, interiors, and turnkey construction.</h1>
            <p className="mt-6 text-base leading-8 text-crown-beige/90 sm:text-lg">A premium hero presentation of current projects and upcoming luxury properties from Crown Home Spaces, designed for discerning clients in Kondapur and Hyderabad.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,156,109,0.14),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.03),_transparent_40%),#14100d] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Live Projects</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">Cinematic luxury interior and turnkey project showcases from Hyderabad.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-crown-beige/90">A premium collection of live projects designed and delivered by Crown Home Spaces, featuring architectural elevations, residential construction, and luxury interiors with gold accent details.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/projects" className="inline-flex items-center justify-center rounded-full bg-crown-gold px-6 py-3 text-sm font-semibold text-crown-dark transition hover:bg-white">View Portfolio</a>
                <a href="/master-azhar" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10">Explore Founder Journey</a>
                <a href="https://fighter-combat-academy.netlify.app/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10">Visit Fighters Combat Academy</a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <img src={founder.founderImageUrl} alt="Shaik Azaruddin" className="h-20 w-20 rounded-full object-cover border-2 border-white/10 shadow-md" />
                <div>
                  <p className="text-sm font-semibold text-white">Shaik Azaruddin</p>
                  <p className="text-xs text-crown-beige/90">Founder, Crown Home Spaces</p>
                </div>
              </div>
            </div>
            <div className="rounded-[40px] border border-white/10 bg-black/40 p-8 shadow-glow backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Founder cross-brand story</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Founder of Fighters Combat Academy</h2>
              <p className="mt-4 text-crown-beige/90 leading-7">Leadership beyond construction and luxury interiors. Shaik Azaruddin delivers both Crown Home Spaces and Fighters Combat Academy with discipline, transformation, and premium excellence.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">11+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-crown-gold">Years Experience</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">30+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-crown-gold">Delivered Interior Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="mb-8 flex items-center gap-4 rounded-full border border-crown-gold/30 bg-black/40 px-5 py-3 text-sm uppercase tracking-[0.35em] text-crown-gold shadow-glow">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-crown-gold text-black font-semibold">★</span>
              Current live premium projects
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <Link key={project.slug} to={`/projects/${project.slug}`} className="group">
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-glow transition hover:border-crown-gold/40 hover:bg-white/10"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={imageMap[project.imageName] || fallbackImage}
                        alt={`${project.name} project in Hyderabad`}
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <div className="absolute left-6 bottom-6 right-6 text-white">
                        <span className="inline-flex rounded-full bg-crown-gold/15 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-crown-gold">{project.category}</span>
                        <h2 className="mt-4 text-2xl font-semibold">{project.name}</h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.35em] text-crown-gold">
                        <span>{project.status}</span>
                        <button type="button" onClick={(e) => { e.preventDefault(); setActive(index); }} className="text-white transition hover:text-crown-gold">Preview</button>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-crown-beige/90">{project.description}</p>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[40px] border border-white/10 bg-black/40 p-8 shadow-glow backdrop-blur-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Cinematic exhibition</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Live project spotlight</h2>
              <p className="mt-4 text-crown-beige/90 leading-7">Each project reflects Crown Home Spaces’ commitment to luxurious materials, spatial narrative, and premium craftsmanship for Hyderabad’s elite residences.</p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-semibold text-white">Luxury Interiors</p>
                <p className="mt-2 text-sm text-crown-beige/90">Premium design direction for curated living spaces.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-semibold text-white">Turnkey Projects</p>
                <p className="mt-2 text-sm text-crown-beige/90">From concept to completion with craftsmanship and control.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-semibold text-white">Hyderabad Focus</p>
                <p className="mt-2 text-sm text-crown-beige/90">Local delivery across Kondapur, Gachibowli, Jubilee Hills, Hitech City, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0e0a06] shadow-2xl">
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-white/10"
            >
              Close
            </button>
            <img src={imageMap[selected.imageName] || fallbackImage} alt={`${selected.name} preview`} className="h-[60vh] min-h-[320px] w-full object-cover" loading="lazy" />
            <div className="p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">{selected.category}</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">{selected.name}</h2>
              <p className="mt-4 text-base leading-8 text-crown-beige/90">{selected.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-crown-gold/30 bg-crown-gold/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-crown-gold">{selected.status}</span>
                <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="rounded-full bg-crown-gold px-5 py-3 text-xs font-semibold text-crown-dark transition hover:bg-white">Discuss this project</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveProjects;
