import { motion } from 'framer-motion';
import { team } from '../data/team.js';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const TeamSection = ({ featuredOnly = false }) => {
  const lead = team.find((m) => m.featured) || team[0];
  const others = team.filter((m) => m !== lead);

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Leadership</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Meet our leadership & engineering team</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <motion.article initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative col-span-full rounded-[32px] border border-crown-gold/30 bg-gradient-to-br from-[#281f18] to-[#1d140d] p-8 shadow-[0_30px_80px_rgba(198,156,109,0.08)] lg:col-span-2">
            <div className="flex gap-6">
              <div className="relative">
                <div className="h-36 w-36 overflow-hidden rounded-2xl border border-crown-gold bg-crown-rich p-0">
                  <img src={lead.image} alt={lead.name} className="h-full w-full object-cover" />
                </div>
                <div className="absolute -right-3 -top-3 rounded-full bg-crown-gold p-2 text-crown-dark shadow-glow">★</div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-white">{lead.name}</h3>
                  <span className="rounded-full bg-crown-gold/10 px-3 py-1 text-xs font-semibold text-crown-gold">{lead.role}</span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-7 text-crown-beige/90">{lead.summary}</p>

                <div className="mt-6 flex items-center gap-3">
                  <a href={lead.socials.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a href={lead.socials.email} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-crown-beige transition hover:bg-white/5">
                    <FiMail /> Email
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-2xl font-semibold text-white">{lead.projects}</p>
                    <p className="mt-1 text-xs text-crown-beige/90">Projects</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">{lead.experience}</p>
                    <p className="mt-1 text-xs text-crown-beige/90">Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">{lead.specialization}</p>
                    <p className="mt-1 text-xs text-crown-beige/90">Specialization</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {!featuredOnly && others.map((member) => (
            <motion.article
              whileHover={{ y: -6, scale: 1.02 }}
              key={member.id}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-glow transition hover:border-crown-gold/30 hover:bg-white/10"
            >
              <div className="absolute -inset-px rounded-[24px] opacity-0 transition group-hover:opacity-100">
                <div className="h-full w-full rounded-[24px] border-2 border-crown-gold/40" />
              </div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-md border border-white/10 bg-crown-rich">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="mt-1 text-xs text-crown-beige/90">{member.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.experience && <span className="rounded-full bg-crown-rich/40 px-3 py-1 text-xs text-crown-beige">{member.experience}</span>}
                    {member.projects && <span className="rounded-full bg-crown-rich/40 px-3 py-1 text-xs text-crown-beige">{member.projects}</span>}
                  </div>
                  {member.skills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.skills.slice(0, 3).map((s) => (
                        <span key={s} className="text-xs text-crown-beige/90">• {s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
