import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

interface AboutSectionProps {
  id?: string;
}

export default function AboutSection({ id = "about" }: AboutSectionProps) {
  const { copy } = useLanguage();

  const challengeGroups = [
    {
      number: "01",
      title: copy.about.cooperativeTitle,
      challenges: copy.about.cooperativeChallenges,
    },
    {
      number: "02",
      title: copy.about.nationalTitle,
      challenges: copy.about.nationalChallenges,
    },
  ];

  return (
    <section
      id={id}
      aria-labelledby="about-title"
      className="relative z-20 scroll-mt-24 border-y border-stone-200 bg-[#f4f5f1] py-24 sm:scroll-mt-28 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-2xl space-y-4"
        >
          <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
            {copy.about.eyebrow}
          </span>
          <h2
            id="about-title"
            className="font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl"
          >
            {copy.about.title}
          </h2>
          <p className="font-sans text-base leading-relaxed text-stone-600 sm:text-lg">
            {copy.about.intro}
          </p>
        </motion.div>

        <div className="border border-stone-300 bg-white lg:grid lg:grid-cols-2">
          {challengeGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: groupIndex * 0.08,
                ease: "easeOut",
              }}
              className={groupIndex === 0 ? "border-b border-stone-300 lg:border-b-0 lg:border-r" : ""}
            >
              <header className="grid min-h-32 grid-cols-[2.75rem_minmax(0,1fr)] items-end gap-4 bg-[#fafaf8] px-5 py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:px-8 sm:py-8">
                <span className="font-mono text-xs font-semibold tracking-[0.14em] text-brand-green-700">
                  {group.number}
                </span>
                <h3 className="max-w-lg font-display text-xl font-bold leading-snug tracking-[-0.015em] text-stone-900 sm:text-2xl">
                  {group.title}
                </h3>
              </header>

              <ol>
                {group.challenges.map((challenge, challengeIndex) => (
                  <li
                    key={`${group.number}-${challengeIndex}`}
                    className="group grid min-h-28 grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-t border-stone-200 px-5 py-6 transition-colors duration-300 hover:bg-[#f7f8f4] sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:px-8"
                  >
                    <span className="pt-1 font-mono text-[10px] font-medium tracking-[0.12em] text-stone-400 transition-colors group-hover:text-brand-green-700">
                      {String(challengeIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="max-w-xl font-sans text-[15px] leading-7 text-stone-600 sm:text-base">
                      {challenge}
                    </p>
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 grid overflow-hidden border border-brand-green-950 lg:grid-cols-12"
        >
          <div className="flex min-h-48 flex-col justify-between bg-brand-green-950 p-6 text-white sm:p-8 lg:col-span-4 lg:min-h-64">
            <p className="max-w-xs font-mono text-[11px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-brand-green-300">
              {copy.about.solutionTitle}
            </p>
            <p aria-hidden="true" className="font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              UKMAC
            </p>
          </div>

          <div className="relative flex min-h-64 items-center bg-[#e5ece2] p-6 sm:p-10 lg:col-span-8 lg:px-12">
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-px bg-brand-green-950/10" />
            <div className="relative max-w-4xl">
              <p className="font-display text-xl font-semibold leading-relaxed tracking-[-0.015em] text-brand-green-950 sm:text-2xl lg:text-3xl">
                {copy.about.solution}
              </p>
              <div className="mt-8 flex items-center gap-4 text-brand-green-800">
                <span aria-hidden="true" className="h-px w-12 bg-current" />
                <ArrowRight aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
