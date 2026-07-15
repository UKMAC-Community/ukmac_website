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
      return "border-sky-200 bg-sky-50 text-sky-900";
    case "green":
      return "border-emerald-200 bg-emerald-50 text-emerald-900";
    case "darkGreen":
    case "dark-green":
    case "dark":
      return "border-brand-green-900 bg-brand-green-950 text-white";
    case "lightGreen":
    case "light-green":
    case "light":
      return "border-lime-200 bg-lime-50 text-lime-950";
    default:
      return "border-stone-200 bg-white text-stone-900";
  }
}

export default function InteractiveMap() {
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
      id="network"
      aria-labelledby="network-title"
      className="relative z-20 overflow-hidden bg-stone-50 py-24 text-stone-900 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-44 top-48 h-96 w-96 rounded-full border border-brand-green-900/5"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-stone-200 pb-14 lg:grid-cols-12 lg:gap-16 lg:pb-16">
          <div className="space-y-4 lg:col-span-5">
            <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
              {networkCopy.eyebrow}
            </span>
            <h2
              id="network-title"
              className="font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl"
            >
              {networkCopy.title}
            </h2>
            <p className="max-w-xl font-sans text-base leading-relaxed text-stone-600 sm:text-lg">
              {networkCopy.description}
            </p>
          </div>

          <div className="space-y-6 lg:col-span-7 lg:border-l lg:border-stone-200 lg:pl-12">
            <p className="font-sans text-lg font-medium leading-relaxed text-stone-800 sm:text-xl">
              {networkCopy.definition}
            </p>
            <div className="border-l-2 border-brand-green-600 bg-white px-5 py-4 shadow-[0_16px_45px_-36px_rgba(28,25,23,0.45)] sm:px-6">
              <p className="font-sans text-sm font-semibold leading-relaxed text-brand-green-900 sm:text-base">
                {networkCopy.policyRule}
              </p>
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16 sm:py-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-center font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
          >
            {networkCopy.hierarchyTitle}
          </motion.h3>

          <ol className="mx-auto mt-10 flex max-w-3xl flex-col items-stretch sm:mt-12 sm:items-center">
            {networkCopy.hierarchy.map((level, index) => (
              <motion.li
                key={level.title}
                variants={itemVariants}
                className="flex w-full flex-col items-center sm:max-w-xl"
              >
                <div className="group grid w-full grid-cols-[3rem_minmax(0,1fr)] items-center border border-stone-200 bg-white shadow-[0_18px_50px_-38px_rgba(28,25,23,0.5)] transition-colors duration-300 hover:border-brand-green-700/40 sm:grid-cols-[4rem_minmax(0,1fr)]">
                  <span
                    aria-hidden="true"
                    className="flex h-full min-h-16 items-center justify-center border-r border-stone-200 font-mono text-xs font-bold text-brand-green-700 sm:min-h-20"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="px-5 py-4 font-display text-lg font-bold tracking-tight text-stone-900 sm:px-7 sm:text-xl">
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

          <motion.div variants={itemVariants} className="mt-14 sm:mt-16">
            <h4 className="text-center font-mono text-xs font-semibold uppercase tracking-widest text-stone-500">
              {networkCopy.teamsTitle}
            </h4>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
              {networkCopy.teams.map((team, index) => {
                const Icon = teamIcons[index] ?? Network;

                return (
                  <li
                    key={team.title}
                    className={`flex min-h-36 flex-col justify-between border p-5 sm:p-6 ${getTeamTone(team.tone)}`}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5 stroke-[1.5] opacity-80" />
                    <span className="mt-8 font-display text-base font-bold leading-snug sm:text-lg">
                      {team.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-stone-200 pt-16 sm:pt-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-4 lg:col-span-5">
              <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-brand-green-700">
                {networkCopy.rolesEyebrow}
              </span>
              <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl">
                {networkCopy.rolesTitle}
              </h3>
            </div>
            <p className="flex items-end font-sans text-base leading-relaxed text-stone-600 sm:text-lg lg:col-span-7 lg:border-l lg:border-stone-200 lg:pl-12">
              {networkCopy.transition}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid border-l border-t border-stone-200 md:grid-cols-3 sm:mt-14"
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
                  className={`flex min-h-full flex-col border-b border-r p-6 sm:p-8 ${
                    isUnion
                      ? "border-brand-green-900 bg-brand-green-950 text-white"
                      : "border-stone-200 bg-white text-stone-900"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center border ${
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

                  <h4 className="mt-8 font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                    {role.copy.title}
                  </h4>

                  <ul className={`mt-6 divide-y ${isUnion ? "divide-white/10" : "divide-stone-200"}`}>
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
