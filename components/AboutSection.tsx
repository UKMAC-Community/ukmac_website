import { motion } from "motion/react";
import { Landmark, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

interface AboutSectionProps {
  id?: string;
}

export default function AboutSection({ id = "about" }: AboutSectionProps) {
  const { copy } = useLanguage();

  const challengeGroups = [
    {
      icon: Users,
      title: copy.about.cooperativeTitle,
      challenges: copy.about.cooperativeChallenges,
    },
    {
      icon: Landmark,
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

        <div className="border border-stone-200 bg-white lg:grid lg:grid-cols-2">
          {challengeGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={groupIndex}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: groupIndex * 0.08,
                  ease: "easeOut",
                }}
                className={groupIndex === 0 ? "border-b border-stone-200 lg:border-b-0 lg:border-r" : ""}
              >
                <header className="flex items-center gap-4 border-b border-stone-200 bg-[#fafaf8] px-6 py-7 sm:px-8">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-stone-200 bg-white text-brand-green-700">
                    <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
                  </span>
                  <h3 className="font-display text-xl font-bold leading-snug tracking-[-0.015em] text-stone-900 sm:text-2xl">
                    {group.title}
                  </h3>
                </header>

                <ol className="divide-y divide-stone-200">
                  {group.challenges.map((challenge, challengeIndex) => (
                    <li
                      key={challengeIndex}
                      className="group flex gap-4 px-6 py-5 transition-colors duration-300 hover:bg-[#f7f8f4] sm:px-8 lg:min-h-32"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300 transition-colors group-hover:bg-brand-green-600"
                      />
                      <p className="font-sans text-[15px] leading-7 text-stone-600 sm:text-base">
                        {challenge}
                      </p>
                    </li>
                  ))}
                </ol>
              </motion.article>
            );
          })}
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 border-t border-stone-200 pt-7 sm:pt-8"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-700">
            {copy.about.solutionTitle}
          </p>
          <div className="mt-4 flex items-start gap-4 sm:items-center sm:gap-5">
            <span
              aria-hidden="true"
              className="mt-1 block h-10 w-1 shrink-0 rounded-full bg-brand-green-600 sm:mt-0"
            />
            <p className="max-w-3xl font-display text-base font-medium leading-relaxed text-stone-700 sm:text-lg">
              {copy.about.solution}
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
