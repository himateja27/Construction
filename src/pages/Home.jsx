import SEO from '../components/SEO.jsx';
import Hero from '../sections/Hero.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import FeaturedProjects from '../sections/FeaturedProjects.jsx';
import WhyChooseSection from '../sections/WhyChooseSection.jsx';
import TeamSection from '../sections/TeamSection.jsx';
import ContactPreview from '../sections/ContactPreview.jsx';

const Home = () => (
  <>
    <SEO title="Crown Home Spaces | Home" description="Crown Home Spaces delivers luxury interior design, construction, and architectural services in Hyderabad." />
    <Hero />
    <main className="bg-crown-dark">
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseSection />

      <section className="px-6 py-16 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
            <h3 className="text-sm uppercase tracking-[0.35em] text-crown-gold">Meet Our Lead Engineer</h3>
            <p className="mt-4 text-3xl font-semibold text-white">Azaruddin — Core engineering strength of Crown Home Spaces</p>
            <p className="mt-4 max-w-2xl text-crown-beige/90">Experienced Lead Civil Engineer delivering structural assurance, project supervision and construction excellence across luxury homes and commercial infrastructure.</p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="rounded-3xl bg-crown-rich/40 px-6 py-4">
                <p className="text-2xl font-semibold text-white">50+</p>
                <p className="text-sm text-crown-beige/90">Projects Delivered</p>
              </div>
              <div className="rounded-3xl bg-crown-rich/40 px-6 py-4">
                <p className="text-2xl font-semibold text-white">5+</p>
                <p className="text-sm text-crown-beige/90">Years Experience</p>
              </div>
              <div className="rounded-3xl bg-crown-rich/40 px-6 py-4">
                <p className="text-2xl font-semibold text-white">Luxury</p>
                <p className="text-sm text-crown-beige/90">Specialization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <ContactPreview />
    </main>
  </>
);

export default Home;
