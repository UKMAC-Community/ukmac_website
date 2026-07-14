import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle2, ChevronRight, Loader2, Landmark, Sprout, Award, HelpCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    orgName: "",
    province: "battambang",
    size: "1-50",
    focus: "rice",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [regId, setRegId] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.orgName) {
      setValidationError("Please complete all required fields (*).");
      return;
    }

    if (!formData.email.includes("@")) {
      setValidationError("Please provide a valid official email address.");
      return;
    }

    setValidationError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setRegId(`UKMAC-2026-${randomNum}`);
    }, 1800);
  };

  const perks = [
    {
      icon: Landmark,
      title: "Full Legal Representation",
      body: "Secure trade advocacy under the Law on Agricultural Cooperatives."
    },
    {
      icon: Sprout,
      title: "Advanced Technology Access",
      body: "Deploy drone diagnostics and soil moisture sensor networks at cost."
    },
    {
      icon: Award,
      title: "Value Chain Protection",
      body: "Secure direct exporting channels, bypassing intermediary brokers completely."
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-earth-950 text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs text-brand-green-400 font-bold tracking-widest uppercase block">
                Cooperative Adhesion
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Join the Union Network
              </h2>
              <p className="font-sans text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                We invite registered agricultural communities, independent farming cooperatives, and eco-agriculture enterprises across Cambodia to join our unified national network.
              </p>
            </div>

            {/* Perks — hairline divided list, plain icons */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              {perks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-3.5 py-4">
                  <perk.icon className="w-4.5 h-4.5 text-brand-green-400 stroke-[1.5] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-white">{perk.title}</h4>
                    <p className="font-sans text-xs text-zinc-500 mt-0.5 leading-relaxed">{perk.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 text-xs text-zinc-400 flex items-start gap-3 leading-relaxed pt-5">
              <HelpCircle className="w-4.5 h-4.5 text-zinc-500 stroke-[1.5] flex-shrink-0 mt-0.5" />
              <span>
                Are you an independent agronomist, researcher, or development agency? Write directly to{" "}
                <strong className="text-zinc-200 font-semibold">collaborations@ukmac.org.kh</strong> to explore strategic partnerships.
              </span>
            </div>
          </div>

          {/* Right Column: Registration Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/10">
              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        Representative Name <span className="text-brand-green-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sok Sopheap"
                        className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        Cooperative/Entity Name <span className="text-brand-green-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="orgName"
                        required
                        value={formData.orgName}
                        onChange={handleInputChange}
                        placeholder="e.g. Angkor Wheat Seed Alliance"
                        className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        Official Email <span className="text-brand-green-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. contact@coop.org.kh"
                        className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        Contact Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +855 23 888 999"
                        className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-1.5">
                      <label className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        Province Location
                      </label>
                      <select
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        className="w-full bg-earth-950 border border-white/15 px-3 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green-400 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="battambang">Battambang</option>
                        <option value="siem_reap">Siem Reap</option>
                        <option value="kampong_cham">Kampong Cham</option>
                        <option value="takeo">Takeo</option>
                        <option value="kampot">Kampot</option>
                        <option value="other">Other Province</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        Farming Households
                      </label>
                      <select
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        className="w-full bg-earth-950 border border-white/15 px-3 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green-400 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="1-50">1 to 50 families</option>
                        <option value="51-200">51 to 200 families</option>
                        <option value="201-500">210 to 500 families</option>
                        <option value="500+">500+ families</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                        Primary Focus Crop
                      </label>
                      <select
                        name="focus"
                        value={formData.focus}
                        onChange={handleInputChange}
                        className="w-full bg-earth-950 border border-white/15 px-3 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green-400 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="rice">Jasmine Rice</option>
                        <option value="vegetables">Safe Organic Veg</option>
                        <option value="cashew">Cashews & Nuts</option>
                        <option value="pepper">GI Kampot Pepper</option>
                        <option value="other">Other Cash Crops</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans font-semibold text-xs text-zinc-400 uppercase tracking-wide">
                      Tell us about your community goals
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe your current harvesting scope, crops, and which UKMAC services (innovation, value chain alignment, training) you require most..."
                      className="w-full bg-transparent border border-white/15 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-green-400 transition-colors resize-none"
                    />
                  </div>

                  {validationError && (
                    <div className="p-3.5 border border-red-500/30 text-red-400 font-sans text-xs font-semibold text-center">
                      {validationError}
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
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Preparing Preview...</span>
                        </>
                      ) : (
                        <>
                          <span>Preview Adhesion Proposal</span>
                          <ChevronRight className="w-4.5 h-4.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-6">
                  <CheckCircle2 className="w-8 h-8 text-brand-green-400 stroke-[1.5]" />

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-brand-green-400 font-bold tracking-widest uppercase block">
                      Application Preview Complete
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-none">
                      Proposal Details Validated
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-md mx-auto font-light">
                    This prototype validated your entries locally and generated a preview reference. No information has been sent to or stored by UKMAC.
                  </p>

                  <div className="p-4 border border-white/10 font-mono text-xs w-full max-w-sm space-y-1.5">
                    <div className="text-zinc-500 text-[10px] uppercase font-semibold tracking-wider">Local Preview Reference</div>
                    <div className="text-brand-green-400 font-semibold text-base tabular-nums select-all">{regId}</div>
                  </div>

                  <p className="font-sans text-[11px] text-zinc-500 max-w-sm leading-normal">
                    Connect this form to an approved UKMAC submission service before accepting live applications for{" "}
                    <span className="font-semibold text-zinc-300 capitalize">{formData.province}</span> or any other province.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        name: "",
                        orgName: "",
                        province: "battambang",
                        size: "1-50",
                        focus: "rice",
                        email: "",
                        phone: "",
                        message: ""
                      });
                    }}
                    className="px-6 py-2.5 border border-white/15 hover:border-white/30 text-zinc-300 font-sans font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Start Another Preview
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