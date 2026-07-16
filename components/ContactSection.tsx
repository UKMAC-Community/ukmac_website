import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Award, CheckCircle2, ChevronRight, CircleOff, HelpCircle, Landmark, Loader2, Mail, Sprout } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { provinces } from "@/lib/data";

const MEMBERSHIP_FORM_AVAILABLE = false;

const perkMetadata = [
  { id: "representation", icon: Landmark },
  { id: "technology", icon: Sprout },
  { id: "value-chain", icon: Award },
] as const;

const provinceOptions = [
  ...provinces.map(({ id }) => ({ value: id, copyKey: id })),
  { value: "other", copyKey: "other" },
] as const;

const householdOptions = [
  { value: "1-50", copyKey: "small" },
  { value: "51-200", copyKey: "medium" },
  { value: "201-500", copyKey: "large" },
  { value: "500+", copyKey: "largest" },
] as const;

const cropOptions = [
  { value: "rice", copyKey: "rice" },
  { value: "vegetables", copyKey: "vegetables" },
  { value: "cashew", copyKey: "cashew" },
  { value: "pepper", copyKey: "pepper" },
  { value: "other", copyKey: "other" },
] as const;

const initialFormData = {
  name: "",
  orgName: "",
  province: "battambang",
  size: "1-50",
  focus: "rice",
  email: "",
  phone: "",
  message: "",
};

type ValidationError = "required" | "email" | null;

export default function ContactSection() {
  const { copy } = useLanguage();
  const contactCopy = copy.contact;
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [regId, setRegId] = useState("");
  const [validationError, setValidationError] = useState<ValidationError>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.orgName) {
      setValidationError("required");
      return;
    }

    if (!formData.email.includes("@")) {
      setValidationError("email");
      return;
    }

    setValidationError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setRegId(`UKMAC-2026-${randomNum}`);
    }, 1800);
  };

  const selectedProvinceOption =
    provinceOptions.find((option) => option.value === formData.province) ?? provinceOptions[0];
  const selectedProvinceLabel =
    contactCopy.provinceOptions[selectedProvinceOption.copyKey];

  return (
    <section id="contact" className="relative z-20 scroll-mt-24 bg-earth-950 py-24 text-white sm:scroll-mt-28 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs text-brand-green-400 font-bold tracking-widest uppercase block">
                {contactCopy.eyebrow}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                {contactCopy.title}
              </h2>
              <p className="font-sans text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                {contactCopy.description}
              </p>
            </div>

            {/* Perks — hairline divided list, plain icons */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              {perkMetadata.map(({ id, icon: Icon }, index) => {
                const perk = contactCopy.perks[index];

                return (
                  <div key={id} className="flex items-start gap-3.5 py-4">
                    <Icon aria-hidden="true" className="w-4.5 h-4.5 text-brand-green-400 stroke-[1.5] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-sans font-semibold text-sm text-white">{perk.title}</h4>
                      <p className="font-sans text-xs text-zinc-500 mt-0.5 leading-relaxed">{perk.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10 text-xs text-zinc-400 flex items-start gap-3 leading-relaxed pt-5">
              <HelpCircle aria-hidden="true" className="w-4.5 h-4.5 text-zinc-500 stroke-[1.5] flex-shrink-0 mt-0.5" />
              <span>
                {contactCopy.partnershipBefore}{" "}
                <strong className="text-zinc-200 font-semibold">collaborations@ukmac.org.kh</strong>
                {" "}{contactCopy.partnershipAfter}
              </span>
            </div>
          </div>

          {/* Right Column: Registration Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/10">
              {!MEMBERSHIP_FORM_AVAILABLE ? (
                <div className="flex min-h-[34rem] flex-col items-center justify-center p-8 text-center sm:p-12">
                  <span className="flex h-14 w-14 items-center justify-center border border-white/15 bg-white/[0.03] text-brand-green-400">
                    <CircleOff aria-hidden="true" className="h-6 w-6 stroke-[1.5]" />
                  </span>
                  <span className="mt-7 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green-400">
                    {contactCopy.unavailableEyebrow}
                  </span>
                  <h3 className="mt-3 max-w-lg font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                    {contactCopy.unavailableTitle}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
                    {contactCopy.unavailableDescription}
                  </p>
                  <a
                    href="mailto:secretariat@ukmac.org.kh"
                    className="mt-8 inline-flex items-center gap-2 border border-brand-green-500 px-5 py-3 text-sm font-semibold text-brand-green-300 transition-colors hover:bg-brand-green-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400"
                  >
                    <Mail aria-hidden="true" className="h-4 w-4" />
                    {contactCopy.unavailableAction}
                  </a>
                </div>
              ) : !submitSuccess ? (
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        {contactCopy.fields.representative} <span aria-hidden="true" className="text-brand-green-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={contactCopy.placeholders.representative}
                        className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-organization" className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        {contactCopy.fields.organization} <span aria-hidden="true" className="text-brand-green-400">*</span>
                      </label>
                      <input
                        id="contact-organization"
                        type="text"
                        name="orgName"
                        required
                        value={formData.orgName}
                        onChange={handleInputChange}
                        placeholder={contactCopy.placeholders.organization}
                        className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        {contactCopy.fields.email} <span aria-hidden="true" className="text-brand-green-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={contactCopy.placeholders.email}
                        className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        {contactCopy.fields.phone}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={contactCopy.placeholders.phone}
                        className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-province" className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        {contactCopy.fields.province}
                      </label>
                      <select
                        id="contact-province"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        className="w-full bg-earth-950 border border-white/15 px-3 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green-400 transition-colors appearance-none cursor-pointer"
                      >
                        {provinceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {contactCopy.provinceOptions[option.copyKey]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-households" className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        {contactCopy.fields.households}
                      </label>
                      <select
                        id="contact-households"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        className="w-full bg-earth-950 border border-white/15 px-3 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green-400 transition-colors appearance-none cursor-pointer"
                      >
                        {householdOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {contactCopy.householdOptions[option.copyKey]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-crop" className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        {contactCopy.fields.crop}
                      </label>
                      <select
                        id="contact-crop"
                        name="focus"
                        value={formData.focus}
                        onChange={handleInputChange}
                        className="w-full bg-earth-950 border border-white/15 px-3 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green-400 transition-colors appearance-none cursor-pointer"
                      >
                        {cropOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {contactCopy.cropOptions[option.copyKey]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-goals" className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                      {contactCopy.fields.goals}
                    </label>
                    <textarea
                      id="contact-goals"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder={contactCopy.placeholders.goals}
                      className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors resize-none"
                    />
                  </div>

                  {validationError && (
                    <div role="alert" className="p-3.5 border border-red-500/30 text-red-400 font-sans text-xs font-semibold text-center">
                      {contactCopy.errors[validationError]}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-green-600 hover:bg-brand-green-500 disabled:bg-zinc-800 text-white font-sans font-semibold text-base transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 aria-hidden="true" className="w-5 h-5 animate-spin" />
                          <span>{contactCopy.preparing}</span>
                        </>
                      ) : (
                        <>
                          <span>{contactCopy.preview}</span>
                          <ChevronRight aria-hidden="true" className="w-4.5 h-4.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-6">
                  <CheckCircle2 aria-hidden="true" className="w-8 h-8 text-brand-green-400 stroke-[1.5]" />

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-brand-green-400 font-bold tracking-widest uppercase block">
                      {contactCopy.successEyebrow}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-none">
                      {contactCopy.successTitle}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-md mx-auto font-light">
                    {contactCopy.successDescription}
                  </p>

                  <div className="p-4 border border-white/10 font-mono text-xs w-full max-w-sm space-y-1.5">
                    <div className="text-zinc-500 text-[10px] uppercase font-semibold tracking-wider">{contactCopy.reference}</div>
                    <div className="text-brand-green-400 font-semibold text-base tabular-nums select-all">{regId}</div>
                  </div>

                  <p className="font-sans text-[11px] text-zinc-500 max-w-sm leading-normal">
                    {contactCopy.serviceWarningBefore}{" "}
                    <span className="font-semibold text-zinc-300">{selectedProvinceLabel}</span>{" "}
                    {contactCopy.serviceWarningAfter}
                  </p>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData(initialFormData);
                    }}
                    className="px-6 py-2.5 border border-white/15 hover:border-white/30 text-zinc-300 font-sans font-semibold text-xs transition-colors cursor-pointer"
                  >
                    {contactCopy.startAnother}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
