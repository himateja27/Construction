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

      <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 shadow-glow">
            <h3 className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-gold">Meet Our Lead Engineer</h3>
            <p className="mt-3 text-xl sm:mt-4 sm:text-2xl md:text-3xl font-semibold text-white">Azaruddin — Core engineering strength of Crown Home Spaces</p>
            <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 md:text-base md:leading-8 text-crown-beige/90">Experienced Lead Civil Engineer delivering structural assurance, project supervision and construction excellence across luxury homes and commercial infrastructure.</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-6">
              <div className="rounded-2xl sm:rounded-3xl bg-crown-rich/40 px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4">
                <p className="text-lg sm:text-2xl font-semibold text-white">50+</p>
                <p className="mt-1 text-xs sm:text-sm text-crown-beige/90">Projects Delivered</p>
              </div>
              <div className="rounded-2xl sm:rounded-3xl bg-crown-rich/40 px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4">
                <p className="text-lg sm:text-2xl font-semibold text-white">5+</p>
                <p className="mt-1 text-xs sm:text-sm text-crown-beige/90">Years Experience</p>
              </div>
              <div className="rounded-2xl sm:rounded-3xl bg-crown-rich/40 px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4">
                <p className="text-lg sm:text-2xl font-semibold text-white">Luxury</p>
                <p className="mt-1 text-xs sm:text-sm text-crown-beige/90">Specialization</p>
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
