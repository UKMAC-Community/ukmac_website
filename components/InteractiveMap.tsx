import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  GraduationCap,
  Landmark,
  Network,
  PackageCheck,
  Sprout,
  Users,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const teamIcons = [Building2, GraduationCap, Network, PackageCheck] as const;

const roleIcons = {
  cooperatives: Sprout,
  union: Users,
  ministry: Landmark,
} as const;

function getTeamTone(tone: string) {
  switch (tone) {
    case "blue":
      return "border-stone-200 bg-white text-stone-900";
    default:
      return "border-lime-100 bg-lime-100 text-stone-900";
  }
}

interface InteractiveMapProps {
  id?: string;
  leadershipId?: string;
}

export default function InteractiveMap({
  id = "network",
  leadershipId,
}: InteractiveMapProps) {
  const { copy } = useLanguage();
  const networkCopy = copy.network;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.11 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const roles = [
    { id: "cooperatives", copy: networkCopy.roles.cooperatives },
    { id: "union", copy: networkCopy.roles.union },
    { id: "ministry", copy: networkCopy.roles.ministry },
  ] as const;

  return (
    <section
      id={id}
      aria-labelledby="network-title"
      className="relative z-20 scroll-mt-24 overflow-hidden bg-stone-50 py-16 text-stone-900 sm:py-24 sm:scroll-mt-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-44 top-48 hidden h-96 w-96 rounded-full border border-brand-green-900/5 sm:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-stone-200 pb-10 lg:grid-cols-12 lg:gap-16 lg:pb-16">
          <div className="space-y-4 lg:col-span-5">
            <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
              {networkCopy.eyebrow}
            </span>
            <h2
              id="network-title"
              className="font-display text-2xl font-bold leading-tight tracking-tight text-stone-900 sm:text-3xl lg:text-5xl"
            >
              {networkCopy.title}
            </h2>
            <p className="max-w-xl font-sans text-sm leading-relaxed text-stone-600 sm:text-base lg:text-lg">
              {networkCopy.description}
            </p>
          </div>

          <div className="space-y-4 lg:col-span-7 lg:space-y-6 lg:border-l lg:border-stone-200 lg:pl-12">
            <p className="font-sans text-base font-medium leading-relaxed text-stone-800 sm:text-lg lg:text-xl">
              {networkCopy.definition}
            </p>
            <div className="border-l-2 border-brand-green-600 bg-white px-4 py-3 shadow-[0_16px_45px_-36px_rgba(28,25,23,0.45)] sm:px-5 sm:py-4 lg:px-6">
              <p className="font-sans text-xs font-semibold leading-relaxed text-brand-green-900 sm:text-sm lg:text-base">
                {networkCopy.policyRule}
              </p>
            </div>
          </div>
        </div>

        <motion.div
          id={leadershipId}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-24 py-10 sm:py-16 sm:scroll-mt-28 lg:py-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-center font-display text-lg font-bold tracking-tight text-stone-900 sm:text-2xl lg:text-3xl"
          >
            {networkCopy.hierarchyTitle}
          </motion.h3>

          {/* Hierarchy: always a single stacked column, at every screen size —
              each level is a full-width box with the number in its own left
              column, connected to the next by a thin line + down arrow.
              Sizes scale down via sm:/lg: but the structure never switches
              to a horizontal row, so nothing can misalign or disconnect. */}
          <ol className="mx-auto mt-8 flex max-w-3xl flex-col items-stretch sm:mt-10 lg:mt-12">
            {networkCopy.hierarchy.map((level, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex w-full flex-col items-center"
              >
                <div className="group grid w-full grid-cols-[3rem_minmax(0,1fr)] items-center border border-stone-200 bg-white shadow-[0_18px_50px_-38px_rgba(28,25,23,0.5)] transition-colors duration-300 hover:border-brand-green-700/40 sm:grid-cols-[4rem_minmax(0,1fr)]">
                  <span
                    aria-hidden="true"
                    className="flex h-full min-h-16 items-center justify-center border-r border-stone-200 font-mono text-xs font-bold text-brand-green-700 sm:min-h-20"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="px-5 py-4 font-display text-sm font-bold tracking-tight text-stone-900 sm:px-7 sm:text-lg lg:text-xl">
                    {level.title}
                  </span>
                </div>

                {index < networkCopy.hierarchy.length - 1 && (
                  <div aria-hidden="true" className="flex h-11 flex-col items-center justify-end text-brand-green-700">
                    <span className="h-full w-px bg-stone-300" />
                    <ArrowDown className="-mt-1 h-4 w-4" />
                  </div>
                )}
              </motion.li>
            ))}
          </ol>

          <motion.div variants={itemVariants} className="mt-10 sm:mt-2">
            <h4 className="sr-only">{networkCopy.teamsTitle}</h4>

            {/* Stem connecting the hierarchy to the team branch line (desktop only) */}
            <div aria-hidden="true" className="mx-auto hidden h-10 w-px bg-stone-300 lg:block" />

            {/* Horizontal branch line connecting to each team column (desktop only) */}
            <div aria-hidden="true" className="relative hidden h-10 lg:block">
              <div className="absolute inset-x-[12.5%] top-0 h-px bg-stone-300" />
              <div className="grid h-full grid-cols-4">
                {networkCopy.teams.map((_, index) => (
                  <div key={index} className="mx-auto h-full w-px bg-stone-300" />
                ))}
              </div>
            </div>

            {/* Mobile/tablet: single vertical trunk line on the left with a
                horizontal tick branching out to each stacked team box.
                Desktop keeps the 4-column grid fed by the branch line above. */}
            <ul className="relative mt-7 flex flex-col gap-6 pl-6 lg:mt-0 lg:grid lg:grid-cols-4 lg:gap-3 lg:pl-0" role="list">
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-0 top-0 w-px bg-stone-300 lg:hidden"
              />
              {networkCopy.teams.map((team, index) => {
                const Icon = teamIcons[index] ?? Network;

                return (
                  <li key={index} className="relative">
                    {/* Horizontal tick from the trunk line to this box (mobile/tablet only) */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-6 top-1/2 h-px w-6 -translate-y-1/2 bg-stone-300 lg:hidden"
                    />
                    <div
                      className={`flex min-h-28 flex-col justify-between border p-4 sm:min-h-36 sm:p-5 lg:p-6 ${getTeamTone(team.tone)}`}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5] opacity-80" />
                      <span className="mt-6 font-display text-sm font-bold leading-snug sm:mt-8 sm:text-base lg:text-lg">
                        {team.title}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-stone-200 pt-10 sm:pt-16 lg:pt-20">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-4 lg:col-span-5">
              <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
                {networkCopy.rolesEyebrow}
              </span>
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-stone-900 sm:text-2xl lg:text-4xl">
                {networkCopy.rolesTitle}
              </h3>
            </div>
            <p className="font-sans text-sm leading-relaxed text-stone-600 sm:text-base lg:col-span-7 lg:flex lg:items-end lg:border-l lg:border-stone-200 lg:pl-12 lg:text-lg">
              {networkCopy.transition}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid border-l border-t border-stone-200 sm:mt-10 md:grid-cols-3 lg:mt-14"
            role="list"
          >
            {roles.map((role, roleIndex) => {
              const Icon = roleIcons[role.id];
              const isUnion = role.id === "union";

              return (
                <motion.article
                  key={role.id}
                  variants={itemVariants}
                  role="listitem"
                  className={`flex min-h-full flex-col border-b border-r p-5 sm:p-6 lg:p-8 ${
                    isUnion
                      ? "border-brand-green-900 bg-brand-green-950 text-white"
                      : "border-stone-200 bg-white text-stone-900"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className={`flex h-10 w-10 items-center justify-center border sm:h-11 sm:w-11 ${
                        isUnion
                          ? "border-white/20 bg-white/5 text-brand-green-300"
                          : "border-brand-green-700/20 text-brand-green-700"
                      }`}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-mono text-[10px] font-bold tracking-widest ${
                        isUnion ? "text-brand-green-300" : "text-stone-400"
                      }`}
                    >
                      {String(roleIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="mt-6 font-display text-lg font-bold leading-snug tracking-tight sm:mt-8 sm:text-xl lg:text-2xl">
                    {role.copy.title}
                  </h4>

                  <ul className={`mt-5 divide-y sm:mt-6 ${isUnion ? "divide-white/10" : "divide-stone-200"}`}>
                    {role.copy.items.map((item, itemIndex) => (
                      <li key={`${role.id}-${itemIndex}`} className="flex gap-3 py-3 first:pt-0">
                        <Check
                          aria-hidden="true"
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isUnion ? "text-brand-green-300" : "text-brand-green-700"
                          }`}
                        />
                        <span
                          className={`font-sans text-sm leading-relaxed ${
                            isUnion ? "text-stone-200" : "text-stone-600"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ArrowRight
                    aria-hidden="true"
                    className={`mt-auto h-4 w-4 self-end pt-8 box-content ${
                      isUnion ? "text-brand-green-300" : "text-stone-300"
                    }`}
                  />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}