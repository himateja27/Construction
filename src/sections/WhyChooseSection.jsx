import { motion } from 'framer-motion';

const WhyChooseSection = () => (
  <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Why Crown Home Spaces</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A strategic partner for luxury architecture and construction.</h2>
        <p className="mt-6 max-w-xl leading-8 text-crown-beige/90 sm:text-lg">
          We combine design direction, engineering rigor, and refined finishes to deliver premium projects that stand the test of time.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { title: 'Design Excellence', detail: 'Creative planning and interior styling for elevated brand experiences.' },
          { title: 'Project Delivery', detail: 'On-time procurement, scheduling, and on-site supervision.' },
          { title: 'Technical Precision', detail: 'MEP, civil, and structural planning for robust systems.' },
          { title: 'Local Expertise', detail: 'Hyderabad-focused execution with compliance and local approvals.' }
        ].map((item) => (
          <motion.article key={item.title} whileHover={{ y: -6 }} className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:border-crown-gold/30 hover:bg-white/10">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-crown-beige/90">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
